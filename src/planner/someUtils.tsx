

export const getTimeBlock = () => {
    let ret = [{
        hour: "6",
        minutes: [
            {
                minute: "0",
                color: "#A5AED500"
            },
            {
                minute: "10",
                color: "#A5AED500"
            },
            {
                minute: "20",
                color: "#A5AED500"
            },
            {
                minute: "30",
                color: "#A5AED500"
            },
            {
                minute: "40",
                color: "#A5AED500"
            },
            {
                minute: "50",
                color: "#A5AED500"
            }
        ]
    },]
    for (let i = 7; i < 30; ++i) {
        ret.push({
            hour: (i % 24).toString(),
            minutes: [
                {
                    minute: "0",
                    color: "#A5AED500"
                },
                {
                    minute: "10",
                    color: "#A5AED500"
                },
                {
                    minute: "20",
                    color: "#A5AED500"
                },
                {
                    minute: "30",
                    color: "#A5AED500"
                },
                {
                    minute: "40",
                    color: "#A5AED500"
                },
                {
                    minute: "50",
                    color: "#A5AED500"
                }
            ]
        })
    }
    return ret
}