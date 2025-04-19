import React from 'react'
import style from './Line.module.css'
import { ResponsiveLine } from '@nivo/line'

export default function Line()
{
    const data = [
        {
            "id": "japan",
            "color": "hsl(344, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 107
                },
                {
                    "x": "helicopter",
                    "y": 196
                },
                {
                    "x": "boat",
                    "y": 242
                },
                {
                    "x": "train",
                    "y": 248
                },
                {
                    "x": "subway",
                    "y": 152
                },
                {
                    "x": "bus",
                    "y": 172
                },
                {
                    "x": "car",
                    "y": 176
                },
                {
                    "x": "moto",
                    "y": 240
                },
                {
                    "x": "bicycle",
                    "y": 294
                },
                {
                    "x": "horse",
                    "y": 44
                },
                {
                    "x": "skateboard",
                    "y": 279
                },
                {
                    "x": "others",
                    "y": 165
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(317, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 18
                },
                {
                    "x": "helicopter",
                    "y": 98
                },
                {
                    "x": "boat",
                    "y": 65
                },
                {
                    "x": "train",
                    "y": 109
                },
                {
                    "x": "subway",
                    "y": 107
                },
                {
                    "x": "bus",
                    "y": 41
                },
                {
                    "x": "car",
                    "y": 160
                },
                {
                    "x": "moto",
                    "y": 122
                },
                {
                    "x": "bicycle",
                    "y": 232
                },
                {
                    "x": "horse",
                    "y": 137
                },
                {
                    "x": "skateboard",
                    "y": 254
                },
                {
                    "x": "others",
                    "y": 88
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(39, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 295
                },
                {
                    "x": "helicopter",
                    "y": 96
                },
                {
                    "x": "boat",
                    "y": 293
                },
                {
                    "x": "train",
                    "y": 224
                },
                {
                    "x": "subway",
                    "y": 199
                },
                {
                    "x": "bus",
                    "y": 84
                },
                {
                    "x": "car",
                    "y": 75
                },
                {
                    "x": "moto",
                    "y": 25
                },
                {
                    "x": "bicycle",
                    "y": 64
                },
                {
                    "x": "horse",
                    "y": 150
                },
                {
                    "x": "skateboard",
                    "y": 248
                },
                {
                    "x": "others",
                    "y": 55
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(131, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 20
                },
                {
                    "x": "helicopter",
                    "y": 54
                },
                {
                    "x": "boat",
                    "y": 77
                },
                {
                    "x": "train",
                    "y": 47
                },
                {
                    "x": "subway",
                    "y": 121
                },
                {
                    "x": "bus",
                    "y": 99
                },
                {
                    "x": "car",
                    "y": 213
                },
                {
                    "x": "moto",
                    "y": 267
                },
                {
                    "x": "bicycle",
                    "y": 32
                },
                {
                    "x": "horse",
                    "y": 285
                },
                {
                    "x": "skateboard",
                    "y": 10
                },
                {
                    "x": "others",
                    "y": 135
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(115, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 271
                },
                {
                    "x": "helicopter",
                    "y": 187
                },
                {
                    "x": "boat",
                    "y": 100
                },
                {
                    "x": "train",
                    "y": 227
                },
                {
                    "x": "subway",
                    "y": 262
                },
                {
                    "x": "bus",
                    "y": 253
                },
                {
                    "x": "car",
                    "y": 208
                },
                {
                    "x": "moto",
                    "y": 11
                },
                {
                    "x": "bicycle",
                    "y": 276
                },
                {
                    "x": "horse",
                    "y": 253
                },
                {
                    "x": "skateboard",
                    "y": 294
                },
                {
                    "x": "others",
                    "y": 43
                }
            ]
        }
    ]
    return (
        <div className={style.Line}>
            <ResponsiveLine
                data={data}
                theme={
                    {
                        "background": "transparent",
                        "legend": {
                            "text": {
                                "fontSize": 15,
                                "fill": "#fff",
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            }
                        },

                        "text": {
                            "fontSize": 11,
                            "fill": "#fff",
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        },

                        "tooltip": {
                            "wrapper": {},
                            "container": {
                                "background": "#ffffff",
                                "color": "rgb(35, 46, 148)",
                                "fontSize": 12
                            },
                        },
                        "grid": {
                            "line": {
                                "stroke": "#dddddd",
                                "strokeWidth": 0
                            }
                        },
                        // "axis": {
                        //     "domain": {
                        //         "line": {
                        //             "stroke": "#777777",
                        //             "strokeWidth": 1
                        //         }
                        //     },


                        //     "ticks": {
                        //         "line": {
                        //             "stroke": "#777777",
                        //             "strokeWidth": 1
                        //         },
                        //         "text": {
                        //             "fontSize": 11,
                        //             "fill": "#333333",
                        //             "outlineWidth": 0,
                        //             "outlineColor": "transparent"
                        //         }
                        //     }
                        // },
   
                        // "legends": {
                        //     "title": {
                        //         "text": {
                        //             "fontSize": 11,
                        //             "fill": "#fff",
                        //             "outlineWidth": 0,
                        //             "outlineColor": "transparent"
                        //         }
                        //     },
                        //     "text": {
                        //         "fontSize": 11,
                        //         "fill": "#fff",
                        //         "outlineWidth": 0,
                        //         "outlineColor": "transparent"
                        //     },
                        //     "ticks": {
                        //         "line": {},
                        //         "text": {
                        //             "fontSize": 10,
                        //             "fill": "#333333",
                        //             "outlineWidth": 0,
                        //             "outlineColor": "transparent"
                        //         }
                        //     }
                        // },
                        // "annotations": {
                        //     "text": {
                        //         "fontSize": 13,
                        //         "fill": "#333333",
                        //         "outlineWidth": 2,
                        //         "outlineColor": "#ffffff",
                        //         "outlineOpacity": 1
                        //     },
                        //     "link": {
                        //         "stroke": "#000000",
                        //         "strokeWidth": 1,
                        //         "outlineWidth": 2,
                        //         "outlineColor": "#ffffff",
                        //         "outlineOpacity": 1
                        //     },
                        //     "outline": {
                        //         "stroke": "#000000",
                        //         "strokeWidth": 2,
                        //         "outlineWidth": 2,
                        //         "outlineColor": "#ffffff",
                        //         "outlineOpacity": 1
                        //     },
                        //     "symbol": {
                        //         "fill": "#000000",
                        //         "outlineWidth": 2,
                        //         "outlineColor": "#ffffff",
                        //         "outlineOpacity": 1
                        //     }
                        // },
                        // 
                        //     "basic": {},
                        //     "chip": {},
                        //     "table": {},
                        //     "tableCell": {},
                        //     "tableCellValue": {}
                        // }
                    }
                }
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                curve="catmullRom"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 44,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -55,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                colors={{ scheme: 'yellow_green_blue' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="data.yFormatted"
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}
