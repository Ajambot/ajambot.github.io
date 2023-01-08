let bgColors = ['#01befe','#aaff00', '#8f00ff', '#FFFFFF', '#ffdd00', '#FFA500', '#19d2c3', '#a8dadc', '#FEE59A'];
let bgColors2 = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#FFFFFC'];

window.onload = function() {
    const ul = document.querySelectorAll(".project-list");
    for(const lists of ul){
        const len = lists.children.length;
        for(const elements of lists.children)
        {
            elements.style.width = (75/len) + 'vw';
        }
    }
    let list = Array.from(document.querySelectorAll(".soft-skills")[0].children);
    let i=0;
    list.forEach((element) => {
        let icons = Array.from(element.getElementsByTagName("img"));
        icons[0].style.backgroundColor = bgColors[i++];
    });
}

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
});

var yLabels = {
    0 : 'Beginner',
    50 : 'Intermediate',
    100 : 'Advanced'
}

Chart.defaults.color = "#2e3440";
var ctx = document.getElementById("hard-skills");
var ctx2 = document.getElementById("soft-skills");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'C/C++', ['MIPS', 'architecture'], 'Git'],
        datasets: [{
            data: [70, 70, 40, 90, 60, 40],
            backgroundColor: ['#ffff1f', '#5587ff', '#f72c1c', '#2eff71', '#9b19ff', '#34498e'],
            borderColor: ['#efd40f', '#3418db', '#b12c3f', '#2ecc71', '#8119ff', '#11198f'],
            borderWidth: 2
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                ticks: {
                    beginAtZero: true,
                    stepSize: 50,
                    callback: (value, index, ticks)=> {
                        return yLabels[value];
                    }
                }
            },
            y: {
                ticks: {
                    crossAlign: 'center'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Hard Skills',
                font: {
                    size: 32,
                }
            },
            legend: {
                display: false
            },
            font: {
                size: 50
            }
        }
    }
});

/*var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'C/C++', 'MIPS architecture', 'Git'],
        datasets: [{
            data: [70, 70, 40, 90, 60, 40],
            backgroundColor: ['#ffff1f', '#5587ff', '#f72c1c', '#2eff71', '#9b19ff', '#34498e'],
            borderColor: ['#efd40f', '#3418db', '#b12c3f', '#2ecc71', '#8119ff', '#11198f'],
            borderWidth: 2
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                ticks: {
                    beginAtZero: true,
                    stepSize: 50,
                    callback: (value, index, ticks)=> {
                        return yLabels[value];
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Soft Skills',
                font: {
                    size: 25
                }
            },
            legend: {
                display: false
            },
        }
    }
});*/