import React from 'react'
import './Main.scss'
export default function Main() {
	var Div=()=>{
		var value=[
			{title:"Supervisor",
			paragraph:"Monitors activity to identity project roadblocks",
			color:'green',
			img:'./images/icon-supervisor.svg'
			},
			{title:"Team Builder",
			paragraph:"Scans our talent network to create the optimal team for project",
			color:'red',
			img:'./images/icon-team-builder.svg'},
			{title:"Karma",
			paragraph:"Regularly evaluates our talent to ensure quality",
			color:'orange',
			img:'./images/icon-karma.svg'},
			{title:"Calculator",
			paragraph:"Uses data from past projects to provide better delivery estimates",
			color:'blue',
			img:'./images/icon-calculator.svg'}
		]
		return(
				value.map((a,i)=>{
					return<div key={i} className={a.color +' items'+''}>
						<h2 className="bold700">{a.title}</h2>
						<p>{a.paragraph}</p>
						<img src={a.img} alt={a.img}/>
					</div>
				})
			)
	}
	return (
		<main>
			<Div/>
		</main>
	)
}