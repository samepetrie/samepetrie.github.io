(this["webpackJsonpvisual-resume"]=this["webpackJsonpvisual-resume"]||[]).push([[0],{107:function(e,t,a){},162:function(e,t,a){e.exports=a(279)},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},277:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(143),i=a.n(l),o=(a(167),a(35)),s=a(36),c=a(75),d=a(39),u=a(38),m=a(285),y=a(286),p=a(287),h=a(295),f=a(298),g=a(299),b=a(294),D=a(302),x=a(296),E=a(304);a(168),a(169);var v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{fluid:!0},r.a.createElement(y.a,null,r.a.createElement(p.a,{className:"titles"},r.a.createElement("h1",null,this.props.data.role||"Product Manager. Data Analyst. Enigmatologist."),r.a.createElement("h5",{id:"location"},this.props.data.org||"Charlotte, NC"),r.a.createElement("h5",{id:"duration"},function(e,t){var a="June 1996",n="Present",r=["January","February","March","April","May","June","July","August","September","October","November","December"];if(null!=e){var l=new Date(e);a=r[l.getMonth()]+" "+l.getFullYear()}if(null!=t){var i=new Date(t);n=r[i.getMonth()]+" "+i.getFullYear()}return a+" - "+n}(this.props.data.start_date,this.props.data.end_date)))),r.a.createElement(y.a,null,r.a.createElement(p.a,{className:"details"},r.a.createElement("p",null,this.props.data.description||"Hi! I'm Sam. Take a look around at my adventure so far, then get in touch to learn more."))))}}]),a}(n.Component),A=(a(170),a(107),a(76)),F=(new Date(2014,6,14),new Date(2018,5,13),a(293)),S=["#006D77","#83C5BE","#FFDDD2","#79A1B9","#393D3F"],k=[{x:"Data Analyst",y:.4},{x:"Product Manager",y:.3},{x:"Business Analyst",y:.2},{x:"Software Developer",y:.1}],w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={filteredData:k},n}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.data.archetypes?this.setState({filteredData:e.data.archetypes}):this.setState({filteredData:k})}},{key:"render",value:function(){return r.a.createElement(m.a,{fluid:!0},r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement(h.a,{containerComponent:r.a.createElement(f.a,{radius:2}),style:{parent:{background:"#FFFFFF",borderRadius:"6px"}},width:500},r.a.createElement(g.a,{text:"Archetypes",x:30,y:30,textAnchor:"start",style:{fontSize:20,fill:"#393D3F",fontFamily:"Quicksand",fontWeight:"bold"}}),r.a.createElement(D.a,{style:{axis:{stroke:"transparent"},ticks:{stroke:"transparent"},tickLabels:{fill:"transparent"}}}),r.a.createElement(F.a,{innerRadius:60,data:this.state.filteredData,colorScale:S,style:{labels:{fontSize:14,fontFamily:"Quicksand"}}})))))}}]),a}(n.Component),C=a(300),P=["#006D77","#83C5BE","#FFDDD2","#79A1B9","#393D3F"],M=[{x:"Summary",y:.3,label:"Java"},{x:"Summary",y:.3,label:"SQL"},{x:"Summary",y:.2,label:"Tableau"},{x:"Summary",y:.2,label:"Python"}],I=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={filteredData:M},n}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.data.tech?this.setState({filteredData:e.data.tech}):this.setState({filteredData:M})}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{fluid:!0},r.a.createElement(y.a,null,r.a.createElement(p.a,null,r.a.createElement(h.a,{containerComponent:r.a.createElement(f.a,{radius:2}),style:{parent:{background:"#FFFFFF",borderRadius:"6px"}},width:500},r.a.createElement(g.a,{text:"Tech Stack",x:30,y:30,textAnchor:"start",style:{fontSize:20,fill:"#393D3F",fontFamily:"Quicksand",fontWeight:"bold"}}),r.a.createElement(D.a,null),r.a.createElement(C.a,{domainPadding:{x:[0,0],y:10}},this.state.filteredData.map((function(t,a){return r.a.createElement(x.a,{barWidth:120,data:e.state.filteredData.slice(a,a+1),style:{data:{fill:P[a]},labels:{fontSize:14,fontFamily:"Quicksand"}},labelComponent:r.a.createElement(g.a,{dx:75,dy:20,textAnchor:"start",verticalAnchor:"middle"})})})))))))}}]),a}(n.Component);a(277);var N=function(){return r.a.createElement(m.a,{fluid:!0,className:"HeaderContainer"},r.a.createElement(y.a,{className:"HeaderContent"},r.a.createElement(p.a,{md:9,className:"Title"},r.a.createElement("h1",null,"SAMANTHA E. PETRIE")),r.a.createElement(p.a,{md:3},r.a.createElement("button",{className:"ContactButton"},r.a.createElement("a",{href:"mailto:hello@samepetrie.com"},"Contact Sam")))))},j=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clicked=n.updateClicked.bind(Object(c.a)(n)),n.state={filteredData:{},externalMutations:void 0},n}return Object(s.a)(a,[{key:"updateClicked",value:function(e,t){this.setState({filteredData:e,externalMutations:[{childName:"timeline",target:["data"],eventKey:t.toString(),mutation:function(){return{style:{fill:"#FFDDD2",stroke:"#393D3F"}}}}]})}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{className:"AppContainer",fluid:!0},r.a.createElement(y.a,{className:"Header"},r.a.createElement(p.a,null,r.a.createElement(N,null))),r.a.createElement(y.a,{className:"Canvas"},r.a.createElement(p.a,{id:"canvas"},r.a.createElement(m.a,{fluid:!0,className:"Canvas"},r.a.createElement(y.a,{className:"Timeline",id:"Summary"},r.a.createElement(p.a,null,r.a.createElement(m.a,{fluid:!0},r.a.createElement(y.a,{className:"TimelineChart"},r.a.createElement(p.a,null,r.a.createElement(h.a,{containerComponent:r.a.createElement(f.a,{radius:2}),style:{parent:{background:"#FFFFFF",borderRadius:"6px"}},width:1e3,externalEventMutations:this.state.externalMutations,events:[{target:"data",childName:"timeline",eventHandlers:{onClick:function(t,a){return e.clicked(a.datum,a.index),[{target:"data",eventKey:"all",mutation:function(t){return t.datum.index===e?{style:{fill:"#FFDDD2"}}:{style:void 0}}}]}}}]},r.a.createElement(g.a,{text:"Timeline",x:30,y:30,textAnchor:"start",style:{fontSize:20,fill:"#393D3F",fontFamily:"Quicksand",fontWeight:"bold"}}),r.a.createElement(b.a,{x:800,y:15,orientation:"horizontal",gutter:20,style:{title:{fontSize:14}},data:[{name:"Education",symbol:{fill:"#83C5BE",type:"square"}},{name:"Work",symbol:{fill:"#006D77",type:"square"}}]}),r.a.createElement(D.a,{dependentAxis:!0,scale:"time",tickValues:[new Date(2014,1,1),new Date(2015,1,1),new Date(2016,1,1),new Date(2017,1,1),new Date(2018,1,1),new Date(2019,1,1),new Date(2020,1,1),new Date(2021,1,1)],tickFormat:function(e){return e.getFullYear()}}),r.a.createElement(x.a,{name:"timeline",scale:{x:"linear",y:"time"},horizontal:!0,domain:{y:[new Date(2014,1,1),new Date(2021,1,1)],x:[0,3.5]},data:A,style:{data:{fill:function(e){return e.datum.fill}},labels:{fontSize:14,fill:"#393D3F",fontFamily:"Quicksand"}},barWidth:15,x:"category",y:function(e){return new Date(e.start_date)},y0:function(e){return new Date(e.end_date)},labels:function(e){var t=e.datum;return"".concat(t.role," \n ").concat(t.org)},labelComponent:r.a.createElement(E.a,{dy:15,constrainToVisibleArea:!0,orientation:"bottom",pointerLength:0,flyoutStyle:{fill:"#F4F4F9",stroke:"#006D77"}})}))))))),r.a.createElement(y.a,{className:"RolesAndSkills"},r.a.createElement(p.a,null,r.a.createElement(w,{data:this.state.filteredData})),r.a.createElement(p.a,null,r.a.createElement(I,{data:this.state.filteredData}))))),r.a.createElement(p.a,{id:"sidePanel"},r.a.createElement(v,{data:this.state.filteredData}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(278);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e){e.exports=JSON.parse('[{"id":1,"category":2,"fill":"#006D77","role":"Full Stack Web Devloper","org":"Renaissance Computing Institute","description":"Lead web developer for redesign and migration of University of North Carolina Medical School Core Facilities website to Wordpress.","tech":[{"x":"Full Stack Web Devloper","y":0.4,"label":"Javascript"},{"x":"Full Stack Web Devloper","y":0.3,"label":"Excel"},{"x":"Full Stack Web Devloper","y":0.2,"label":"SQL"},{"x":"Full Stack Web Devloper","y":0.1,"label":"PHP"}],"archetypes":[{"x":"Front End Developer","y":0.6},{"x":"Data Analyst","y":0.4}],"start_date":"2015-09-21","end_date":"2018-05-31"},{"id":2,"category":1.5,"fill":"#006D77","role":"Product Management Intern","org":"Premier, Inc.","description":"Executed all roles in the SDLC following Agile methodologies to complete project roadmap 3 weeks early, allowing for further automation that reduced implementation time by 60%.","tech":[{"x":"Product Management Intern","y":0.7,"label":"Tableau"},{"x":"Product Management Intern","y":0.2,"label":"Apache Drill"},{"x":"Product Management Intern","y":0.1,"label":"SQL"}],"archetypes":[{"x":"Product Manager","y":0.7},{"x":"Software Developer","y":0.2},{"x":"Software Architect","y":0.1}],"start_date":"2016-05-10","end_date":"2016-08-10"},{"id":3,"category":1.5,"fill":"#006D77","role":"Data Visualization and Analytics Intern","org":"Visa","description":"Crafted the FY17 Employee Engagement Report utilizing Tableau and Illustrator, presenting progress and suggesting improvement opportunities to senior leadership to help guide employee engagement strategy for the 500+ employees in Cybersecurity.","tech":[{"x":"Data Visualization and Analytics Intern","y":0.6,"label":"Tableau"},{"x":"Data Visualization and Analytics Intern","y":0.4,"label":"Illustrator"}],"archetypes":[{"x":"Data Analyst","y":0.4},{"x":"Project Manager","y":0.4},{"x":"Graphic Designer","y":0.2}],"start_date":"2017-05-10","end_date":"2017-08-10"},{"id":4,"category":1,"fill":"#006D77","role":"Research and Teaching Assistant","org":"Entrepreneurship Center at Kenan-Flagler Business School","description":"Launched the Entrepreneur\'s Genome Project with Dr. Ted Zoller to analyze professional and academic journeys of entrepreneurs in Tableau and Excel and incorporate success models into course curriculum to expedite breakout career moments for entrepreneurial students.","tech":[{"x":"Research and Teaching Assistant","y":0.8,"label":"Tableau"},{"x":"Research and Teaching Assistant","y":0.2,"label":"Excel"}],"archetypes":[{"x":"Data Analyst","y":0.7},{"x":"Operations Coordinator","y":0.3}],"start_date":"2017-01-01","end_date":"2018-06-21"},{"id":5,"category":2,"fill":"#006D77","role":"Associate Business Analyst","org":"Premier, Inc.","description":"Guided a team of 5 engineers following Agile development methodologies on a project to rearchitect our data ingestion pipeline and reduce product implementation time, cutting data validation time by 98% and expanding analytical capabilities to include 10x more data sources.","tech":[{"x":"Associate Business Analyst","y":0.5,"label":"Java"},{"x":"Associate Business Analyst","y":0.2,"label":"MySQL"},{"x":"Associate Business Analyst","y":0.1,"label":"Python"},{"x":"Associate Business Analyst","y":0.1,"label":"Apache Spark"},{"x":"Associate Business Analyst","y":0.1,"label":"Druid"}],"archetypes":[{"x":"Software Developer","y":0.6},{"x":"Business Analyst","y":0.2},{"x":"Data Integration Analyst","y":0.2}],"start_date":"2018-07-09","end_date":"2020-01-03"},{"id":6,"category":2,"fill":"#006D77","role":"Product Implementation Manager","org":"LeanTaaS","description":"Developed analyses using SQL, Python, and Amazon Quicksight to proactively resolve any data configuration errors for our customers.","tech":[{"x":"Product Implementation Manager","y":0.6,"label":"SQL"},{"x":"Product Implementation Manager","y":0.2,"label":"Python"},{"x":"Product Implementation Manager","y":0.2,"label":"Amazon Quicksight"}],"archetypes":[{"x":"Data Analyst","y":0.7},{"x":"Product Manager","y":0.3}],"start_date":"2020-01-06","end_date":"2020-04-17"},{"id":7,"category":2,"fill":"#006D77","role":"Product Manager","org":"Novant Health","description":"Initiated the use of Azure DevOps to lead the development efforts of the Cognitive Computing team so that we could leverage Agile methodologies to concurrently develop 8 predicitve models.","tech":[{"x":"Product Manager","y":0.4,"label":"Azure DevOps"},{"x":"Product Manager","y":0.3,"label":"Python"},{"x":"Product Manager","y":0.2,"label":"PowerBI"},{"x":"Product Manager","y":0.1,"label":"Databricks"}],"archetypes":[{"x":"Product Manager","y":0.6},{"x":"Scrum Master","y":0.4}],"start_date":"2020-06-22","end_date":"2020-12-11"},{"id":8,"category":3,"fill":"#83C5BE","role":"B.S. Computer Science","org":"University of North Carolina - Chapel Hill","description":"I found my passion for entrepreneurship and product innovation here. After being selected for the Adams Apprenticeship program, an elite year-long fellowship for the top student entrepreneurs at UNC, I went on to do entrepreneurial leadership research for Kenan-Flagler Business School, join the executive board of our Makerspace, and become a two-time TA for the business school\'s most exclusive entrepreneurship seminar. Rounding out my time at UNC, I double-minored in Statistics & Analytics and Entrepreneurship, was President of UNC\'s chapter of Timmy Global Health, and cheered for the Tar Heels every chance I got.","start_date":"2014, 6, 14","end_date":"2018, 5, 13"}]')}},[[162,1,2]]]);
//# sourceMappingURL=main.9bd98448.chunk.js.map