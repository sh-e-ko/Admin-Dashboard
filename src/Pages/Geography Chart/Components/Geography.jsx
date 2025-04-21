import React from 'react'
import style from './Geography.module.css'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geo } from './WorldCountrys.jsx'

export default function Geography()
{
    const data = [
        {
            "id": "AFG",
            "value": 129665
        },
        {
            "id": "AGO",
            "value": 144103
        },
        {
            "id": "ALB",
            "value": 314570
        },
        {
            "id": "ARE",
            "value": 818321
        },
        {
            "id": "ARG",
            "value": 412594
        },
        {
            "id": "ARM",
            "value": 244894
        },
        {
            "id": "ATA",
            "value": 841487
        },
        {
            "id": "ATF",
            "value": 352495
        },
        {
            "id": "AUT",
            "value": 230501
        },
        {
            "id": "AZE",
            "value": 362787
        },
        {
            "id": "BDI",
            "value": 185345
        },
        {
            "id": "BEL",
            "value": 189475
        },
        {
            "id": "BEN",
            "value": 622539
        },
        {
            "id": "BFA",
            "value": 574579
        },
        {
            "id": "BGD",
            "value": 54710
        },
        {
            "id": "BGR",
            "value": 967814
        },
        {
            "id": "BHS",
            "value": 815614
        },
        {
            "id": "BIH",
            "value": 488362
        },
        {
            "id": "BLR",
            "value": 998779
        },
        {
            "id": "BLZ",
            "value": 245318
        },
        {
            "id": "BOL",
            "value": 222360
        },
        {
            "id": "BRN",
            "value": 986072
        },
        {
            "id": "BTN",
            "value": 316611
        },
        {
            "id": "BWA",
            "value": 11437
        },
        {
            "id": "CAF",
            "value": 141628
        },
        {
            "id": "CAN",
            "value": 824380
        },
        {
            "id": "CHE",
            "value": 848257
        },
        {
            "id": "CHL",
            "value": 30638
        },
        {
            "id": "CHN",
            "value": 91964
        },
        {
            "id": "CIV",
            "value": 645724
        },
        {
            "id": "CMR",
            "value": 211155
        },
        {
            "id": "COG",
            "value": 720546
        },
        {
            "id": "COL",
            "value": 233208
        },
        {
            "id": "CRI",
            "value": 530296
        },
        {
            "id": "CUB",
            "value": 713329
        },
        {
            "id": "-99",
            "value": 94804
        },
        {
            "id": "CYP",
            "value": 551030
        },
        {
            "id": "CZE",
            "value": 376280
        },
        {
            "id": "DEU",
            "value": 731314
        },
        {
            "id": "DJI",
            "value": 191279
        },
        {
            "id": "DNK",
            "value": 316783
        },
        {
            "id": "DOM",
            "value": 641539
        },
        {
            "id": "DZA",
            "value": 796479
        },
        {
            "id": "ECU",
            "value": 883877
        },
        {
            "id": "EGY",
            "value": 141338
        },
        {
            "id": "ERI",
            "value": 351216
        },
        {
            "id": "ESP",
            "value": 115588
        },
        {
            "id": "EST",
            "value": 496725
        },
        {
            "id": "ETH",
            "value": 702064
        },
        {
            "id": "FIN",
            "value": 6211
        },
        {
            "id": "FJI",
            "value": 990805
        },
        {
            "id": "FLK",
            "value": 399044
        },
        {
            "id": "FRA",
            "value": 865346
        },
        {
            "id": "GAB",
            "value": 421775
        },
        {
            "id": "GBR",
            "value": 625252
        },
        {
            "id": "GEO",
            "value": 864639
        },
        {
            "id": "GHA",
            "value": 730058
        },
        {
            "id": "GIN",
            "value": 665344
        },
        {
            "id": "GMB",
            "value": 689481
        },
        {
            "id": "GNB",
            "value": 537668
        },
        {
            "id": "GNQ",
            "value": 528574
        },
        {
            "id": "GRC",
            "value": 161524
        },
        {
            "id": "GTM",
            "value": 809827
        },
        {
            "id": "GUY",
            "value": 95514
        },
        {
            "id": "HND",
            "value": 978549
        },
        {
            "id": "HRV",
            "value": 314543
        },
        {
            "id": "HTI",
            "value": 971772
        },
        {
            "id": "HUN",
            "value": 977382
        },
        {
            "id": "IDN",
            "value": 90984
        },
        {
            "id": "IND",
            "value": 406095
        },
        {
            "id": "IRL",
            "value": 979750
        },
        {
            "id": "IRN",
            "value": 643675
        },
        {
            "id": "IRQ",
            "value": 463148
        },
        {
            "id": "ISL",
            "value": 764444
        },
        {
            "id": "ISR",
            "value": 668049
        },
        {
            "id": "ITA",
            "value": 777118
        },
        {
            "id": "JAM",
            "value": 31895
        },
        {
            "id": "JOR",
            "value": 7755
        },
        {
            "id": "JPN",
            "value": 603825
        },
        {
            "id": "KAZ",
            "value": 289210
        },
        {
            "id": "KEN",
            "value": 163015
        },
        {
            "id": "KGZ",
            "value": 363202
        },
        {
            "id": "KHM",
            "value": 11446
        },
        {
            "id": "OSA",
            "value": 34174
        },
        {
            "id": "KWT",
            "value": 730262
        },
        {
            "id": "LAO",
            "value": 580191
        },
        {
            "id": "LBN",
            "value": 363838
        },
        {
            "id": "LBR",
            "value": 410063
        },
        {
            "id": "LBY",
            "value": 275203
        },
        {
            "id": "LKA",
            "value": 494349
        },
        {
            "id": "LSO",
            "value": 424455
        },
        {
            "id": "LTU",
            "value": 302302
        },
        {
            "id": "LUX",
            "value": 655340
        },
        {
            "id": "LVA",
            "value": 877770
        },
        {
            "id": "MAR",
            "value": 554290
        },
        {
            "id": "MDA",
            "value": 702014
        },
        {
            "id": "MDG",
            "value": 261298
        },
        {
            "id": "MEX",
            "value": 880445
        },
        {
            "id": "MKD",
            "value": 690474
        },
        {
            "id": "MLI",
            "value": 218812
        },
        {
            "id": "MMR",
            "value": 297029
        },
        {
            "id": "MNE",
            "value": 680924
        },
        {
            "id": "MNG",
            "value": 194128
        },
        {
            "id": "MOZ",
            "value": 940455
        },
        {
            "id": "MRT",
            "value": 913034
        },
        {
            "id": "MWI",
            "value": 197870
        },
        {
            "id": "MYS",
            "value": 389203
        },
        {
            "id": "NAM",
            "value": 118561
        },
        {
            "id": "NCL",
            "value": 694347
        },
        {
            "id": "NER",
            "value": 296409
        },
        {
            "id": "NGA",
            "value": 415554
        },
        {
            "id": "NIC",
            "value": 824424
        },
        {
            "id": "NLD",
            "value": 827335
        },
        {
            "id": "NOR",
            "value": 860853
        },
        {
            "id": "NPL",
            "value": 220758
        },
        {
            "id": "NZL",
            "value": 365078
        },
        {
            "id": "OMN",
            "value": 960028
        },
        {
            "id": "PAK",
            "value": 487119
        },
        {
            "id": "PAN",
            "value": 711059
        },
        {
            "id": "PER",
            "value": 966108
        },
        {
            "id": "PHL",
            "value": 219932
        },
        {
            "id": "PNG",
            "value": 168837
        },
        {
            "id": "POL",
            "value": 498432
        },
        {
            "id": "PRI",
            "value": 929172
        },
        {
            "id": "PRT",
            "value": 989674
        },
        {
            "id": "PRY",
            "value": 941294
        },
        {
            "id": "QAT",
            "value": 718396
        },
        {
            "id": "ROU",
            "value": 642290
        },
        {
            "id": "RUS",
            "value": 978211
        },
        {
            "id": "RWA",
            "value": 493050
        },
        {
            "id": "ESH",
            "value": 790413
        },
        {
            "id": "SAU",
            "value": 3357
        },
        {
            "id": "SDN",
            "value": 727225
        },
        {
            "id": "SDS",
            "value": 825002
        },
        {
            "id": "SEN",
            "value": 560606
        },
        {
            "id": "SLB",
            "value": 584142
        },
        {
            "id": "SLE",
            "value": 733826
        },
        {
            "id": "SLV",
            "value": 329462
        },
        {
            "id": "ABV",
            "value": 455611
        },
        {
            "id": "SOM",
            "value": 1572
        },
        {
            "id": "SRB",
            "value": 563947
        },
        {
            "id": "SUR",
            "value": 319668
        },
        {
            "id": "SVK",
            "value": 527450
        },
        {
            "id": "SVN",
            "value": 101628
        },
        {
            "id": "SWZ",
            "value": 502880
        },
        {
            "id": "SYR",
            "value": 245529
        },
        {
            "id": "TCD",
            "value": 291002
        },
        {
            "id": "TGO",
            "value": 927867
        },
        {
            "id": "THA",
            "value": 115505
        },
        {
            "id": "TJK",
            "value": 88394
        },
        {
            "id": "TKM",
            "value": 857748
        },
        {
            "id": "TLS",
            "value": 56617
        },
        {
            "id": "TTO",
            "value": 481642
        },
        {
            "id": "TUN",
            "value": 2633
        },
        {
            "id": "TUR",
            "value": 894736
        },
        {
            "id": "TWN",
            "value": 135035
        },
        {
            "id": "TZA",
            "value": 662915
        },
        {
            "id": "UGA",
            "value": 524697
        },
        {
            "id": "UKR",
            "value": 536667
        },
        {
            "id": "URY",
            "value": 91819
        },
        {
            "id": "USA",
            "value": 661498
        },
        {
            "id": "UZB",
            "value": 547486
        },
        {
            "id": "VEN",
            "value": 670454
        },
        {
            "id": "VNM",
            "value": 111811
        },
        {
            "id": "VUT",
            "value": 855728
        },
        {
            "id": "PSE",
            "value": 275611
        },
        {
            "id": "YEM",
            "value": 902807
        },
        {
            "id": "ZAF",
            "value": 894331
        },
        {
            "id": "ZMB",
            "value": 229680
        },
        {
            "id": "ZWE",
            "value": 765536
        },
        {
            "id": "KOR",
            "value": 516456
        }
    ]
    return (
        <div className={style.Geography}>
            <ResponsiveChoropleth
                data={data}
                features={geo.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="blues"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                // enableGraticule={true}
                // graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    },
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            {
                                offset: 0,
                                color: '#000'
                            },
                            {
                                offset: 100,
                                color: 'inherit'
                            }
                        ]
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'CAN'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'CHN'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'ATA'
                        },
                        id: 'gradient'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -190,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: 'black',
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#fff',
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
