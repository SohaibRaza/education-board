var Chartist = require("chartist");

export const barChart = {
    data: {
        labels: ['January', 'February', 'March',
           'April', 'May'],
        datasets: [
            {
            label: 'Rainfall',
            backgroundColor: '#00c3b3',
            // borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56]
            }
        ]
    },
    options: {
        axisX: {
            showGrid: false
        },
        low: 0,
        high: 1000,
        chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function(value) {
                    return value[0];
                    }
                }
            }
        ]
    ],
    // animation: {
    //     draw: function(data) {
    //         if (data.type === "bar") {
    //             data.element.animate({
    //                 opacity: {
    //                 begin: (data.index + 1) * delays2,
    //                 dur: durations2,
    //                 from: 0,
    //                 to: 1,
    //                 easing: "ease"
    //                 }
    //             });
    //         }
    //     }
    // }
};
