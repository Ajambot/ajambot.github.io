let bgColors = ['#F0F5F9', '#83a691'];

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
        icons[0].style.backgroundColor = bgColors[i++%2];
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
        labels: ['HTML', 'CSS', 'JavaScript', 'C/C++', ['MIPS', 'architecture'], 'Git', 'Java'],
        datasets: [{
            data: [70, 70, 40, 90, 60, 40, 60],
            backgroundColor: ["#546a76", "#88a0a8", "#9eb7ae", "#b4ceb3", "#c8d1be", "#dbd3c9", "#fad4d8"],
            borderColor: ["#555555"],
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