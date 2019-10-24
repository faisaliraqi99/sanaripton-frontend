let states = {
    fontColor: '#1e1e1e',
    backgroundColor: "#f5f5f5",
    theme: 'light1',
    dataPoints: [
        {name: 'выполняется', y: 0},
        {name: 'выполнено', y: 0},
        {name: 'осталось', y: 0}
    ]
}

class DashBoardDonut{
    constructor(props, states){
        this.props = props;
        this.dataPoints = [];

        states.dataPoints.forEach((e,i) => {
            e.y=this.props.dataPointsY[i];
            this.dataPoints.push(e)
        });
        this.animationEnabled = true;
        this.title = {
            text: this.props.title
        };
        this.height = states.height;
        this.width = states.width;
        this.theme = states.theme;
        this.backgroundColor = states.backgroundColor;
        this.subtitles = [{
            text: 'Задачи',
            verticalAlign: "center",
            fontColor: states.fontColor,
            dockInsidePlotArea: true
        }];
        this.data = [{
            type: "doughnut",	
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: this.dataPoints
        }]
    }
}

let donutsProps=[
    {
        title: 'Мэрия',
        dataPointsY: [30,30,40]
    }
]

let optnsOfDonut = [];
donutsProps.forEach(e=>{
    optnsOfDonut.push(new DashBoardDonut(e, states))
})

export default optnsOfDonut;