import React ,{useState,useEffect} from 'react'; 
import {topnews,newsid} from './Api/news';

import './home.css';

const Home =()=>{ 
	const [tnews,settopnews] = useState('Invalid');
	const [news, setnews] =  useState('');
	var page = 0;
	useEffect(() => {
		async function fetchData() {
			const data = await topnews();
			settopnews(data);
			var a=[]
			for(var i=page;i<50*(page+1);i++) {
				var data1 = await newsid({id:data[i]});
				console.log(data1);
				if(data1.url!==undefined){
					const timestamp = new Date(parseInt(data1.time)*1000); // This would be the timestamp you want to format
					const d = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
					a.push([data1.id,data1.title,data1.url,d]);
				}
			const listitems = a.map((news) => <div key={news[0]} className="column"><div className='card' onClick={()=>{window.open(news[2],'_blank')}}><span>{news[1]}</span><p>{news[3]}</p></div></div>);	
				setnews(listitems);
			}

			}
			if(tnews==='Invalid'){
				fetchData();
			}
	}, [tnews,page]);
	return( 
		<div>
			{news &&(
				<div className="row">{news}</div>
			)}
		</div> 
	);
} 

export default Home;
