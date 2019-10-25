let states = {
    fontColor: '#c7c7c7',
    backgroundColor: "#182139",
    theme: 'dark2',
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
            yValueFormatString: "#,###",
            indexLabel: "{name} - #percent%",
            dataPoints: this.dataPoints
        }]
    }
}

let donutsProps=[
    {
        title: 'Мэрия',
        dataPointsY: [355,301,124]
    }
]

let optnsOfDonut = [];
donutsProps.forEach(e=>{
    optnsOfDonut.push(new DashBoardDonut(e, states))
})

optnsOfDonut.push({
    animationEnabled: true,
    theme: 'dark2',
    backgroundColor: "#182139",
	title:{
		text: "Статистика за месяц"
	},
	axisY: {
		title: "кол-во заявок"
	},
	legend: {
		cursor:"pointer",
	},
	toolTip: {
		shared: true,
	},
	data: [{
		type: "bar",
		showInLegend: true,
		name: "Находились на исп.",
		color: "#6d78ad",
		dataPoints: [
			{ y: 243, label: "ГАИ" },
			{ y: 236, label: "Тазалык" },
			{ y: 200, label: "Мэрия" },
		]
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Выполнено",
		color: "#51cda0",
		dataPoints: [
			{ y: 200, label: "ГАИ" },
			{ y: 186, label: "Тазалык" },
			{ y: 100, label: "Мэрия" },
		]
	}]
})

export default optnsOfDonut;