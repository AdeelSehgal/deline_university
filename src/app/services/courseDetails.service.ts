export class CourseDetailsService {
    courses = [
        {
            id: '101',
            name: 'Javascript Course',
            details: [
                { id: '1', title: 'Javascript Introduction', duration: '2.45', link: 'https://www.youtube.com/embed/ER9SspLe4Hg?si=hZDhvzLvuv2JDRIr' },
                { id: '2', title: 'Javascript basics', duration: '3.45', link: 'https://www.youtube.com/embed/Q4p8vRQX8uY?si=Fe_3rB-5Ls4W5Lid' },
                { id: '3', title: 'Javascript types', duration: '5.45', link: 'https://www.youtube.com/embed/Icev9Oxf0WA?si=MqFr9_HgE63PeaFb' },
                { id: '4', title: 'Javascript questions', duration: '2.30', link: 'https://www.youtube.com/embed/qpU3WIqRz9I?si=oS6lgExVQnqDF5SY' },
            ],
        },
        {
            id: '102',
            name: 'Angular Course',
            details: [
                { id: '1', title: 'Angular Introduction', duration: '2.45', link: 'https://www.youtube.com/embed/NMzl2pGOK_8?si=aZzYPGQBkNEi2I2H' },
                { id: '2', title: 'Angular Basics Structure', duration: '3.45', link: 'https://www.youtube.com/embed/aSN-PIiaNN0?si=ItXn60P8znsDZLSE' },
                { id: '3', title: 'Angular Directives', duration: '5.45', link: 'https://www.youtube.com/embed/Frm2nBrdypg?si=veT1vOcH6P4JAOYy' },
                { id: '4', title: 'Angular Questions', duration: '2.30', link: 'https://www.youtube.com/embed/CV9BfQiPWKA?si=gp9w_5FKBGdbBOuj' },
            ],
        },
        {
            id: '103',
            name: 'Laravel Course',
            details: [
                { id: '1', title: 'Laravel Introduction', duration: '2.45', link: 'https://www.youtube.com/embed/EU7PRmCpx-0?si=AK6kIeb3SfjYhsB6' },
                { id: '2', title: 'Laravel basics', duration: '3.45', link: 'https://www.youtube.com/embed/H3uRXvwXz1o?si=YWM5P088lMeS4U0D' },
                { id: '3', title: 'Laravel structure', duration: '5.45', link: 'https://www.youtube.com/embed/sLFNVXY0APk?si=KI_D0huG0MEsXJVH' },
            ],
        },
        {
            id: '104',
            name: 'Power BI Course',
            details: [
                { id: '1', title: 'Power BI Introduction', duration: '2.45', link: 'https://www.youtube.com/embed/H84UJn1CiWo?si=7g1Qtmk0jiDV58_3' },
                { id: '2', title: 'Power BI  Basics', duration: '3.45', link: 'https://www.youtube.com/embed/c3a7QDNi1R4?si=8ErOCzMiTrTptPtO' },
                { id: '3', title: 'Power BI  Dashboard', duration: '5.45', link: 'https://www.youtube.com/embed/wZATWjV4scg?si=a1SQgLeru_kApRje' },
            ],
        },
        {
            id: '105',
            name: 'Quick Books Course',
            details: [
                { id: '1', title: 'Quick Books Introduction', duration: '2.45', link: 'https://www.youtube.com/embed/PQKVUmcwlwg?si=lv9_Tknyn4ipzYqH' },
                { id: '2', title: 'Quick Books Basics', duration: '3.45', link: 'https://www.youtube.com/embed/zLbDH3KizE0?si=TuSihBUpsZUFBCYh' },
                { id: '3', title: 'Quick Books Dashboard', duration: '5.45', link: 'https://www.youtube.com/embed/q22vng9j5ZA?si=_SQzzcP0ctBWuDxc' },
            ],
        },
        {
            id: '106',
            name: 'Figma Course',
            details: [
                { id: '1', title: 'Figma Introduction', duration: '2.45', link: 'https://www.youtube.com/embed/tBldDf-vmXo?si=qaWwNMVLkJSzs6cY' },
                { id: '2', title: 'Figma Basics', duration: '3.45', link: 'https://www.youtube.com/embed/BFvAfwvRR9I?si=-po0bUa8uxnQMY5i' },
                { id: '3', title: 'Figma Dashboard', duration: '5.45', link: 'https://www.youtube.com/embed/s5WvWFusOOk?si=HrJ7tPfDbbZhEI6K' },
            ],
        },
    ]
}
