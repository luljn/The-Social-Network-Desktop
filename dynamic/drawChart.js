// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create a new Chart.js instance
var chart = new Chart(ctx, {
    // Chart type
    type: 'line',
    // Chart data
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Series A',
            data: [10, 20, 30, 40, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    // Chart options
    options: {
        title: {
            display: true,
            text: 'Statistiques'
        },
        scales: {
            yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
            }]
        }
    }
});