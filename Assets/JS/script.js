window.onload = function() {
    const ul = document.querySelectorAll(".project-list");
    for(const lists of ul){
        const len = lists.children.length;
        for(const elements of lists.children)
        {
            elements.style.width = (80/len) + 'vw';
        }
    }
}

var yLabels = {
    33.33 : 'beginner',
    66.66 : 'intermediate',
    100 : 'advanced'
}

var ctx = document.getElementById("skills-graph");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'C/C++', 'MIPS architecture', 'Git'],
        datasets: [{
            data: [70, 70, 40, 80, 60,40],
            backgroundColor: ['#f1c40f', '#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#34495e'],
            borderColor: ['#ffc41f', '#3498ff', '#ff4c3c', '#2eff71', '#ff59b6', '#34496f'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, ticks) {
                        return yLabels[value];
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});