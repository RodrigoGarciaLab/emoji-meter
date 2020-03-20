import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie'

const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
);

const nivoData = [
    {
        "id": "sass",
        "label": `<img src="https://dev-emoji-meter-backend.e2ma.net/emoji/partyparrot">` ,
        "value": 278,
        "color": "hsl(150, 70%, 50%)"
    },
    {
        "id": "rust",
        "label": "rust",
        "value": 537,
        "color": "hsl(212, 70%, 50%)"
    },
    {
        "id": "javascript",
        "label": "javascript",
        "value": 221,
        "color": "hsl(91, 70%, 50%)"
    },
    {
        "id": "scala",
        "label": "scala",
        "value": 167,
        "color": "hsl(277, 70%, 50%)"
    },
    {
        "id": "css",
        "label": "css",
        "value": 57,
        "color": "hsl(274, 70%, 50%)"
    }
]
/**
 * Renders the Subaccounts page
 */
class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
        };
    }


    render() {
        return (
           <div style={{height: '1024px', width: '800px'}}>
               <div style={{height: 600, width: 700, marginLeft: 50}}>
                   {this.props.data && MyResponsivePie({ data: this.props.data })}
               </div>
           </div>
        );
    }
}

export default Dashboard;
