import React from 'react';
import {useParams} from 'react-router-dom';

const NewsDetails = ({selectedNews, index}) => {
	const {title, urlToImage, content, author, publishedAt} = selectedNews[index];

	const time = new Date(publishedAt).getTime();
	const day = new Date(time).getDate();
	const monthNames = ["January", "February", "March", "April", "May", "June",
 	"July", "August", "September", "October", "November", "December"];
	const month = monthNames[new Date(time).getMonth()];
	const year = new Date(time).getFullYear();
	const newsDate = `${month} ${day}, ${year}`;

	return (
		<div className="col-md-9">
			{selectedNews.length === 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<h1 className="selected-title" style={{fontSize: '27px', paddingBottom: '10px'}}>{title}</h1>
					<div className="d-inline-flex selected-dateAuthor" style={{fontSize: '13px', paddingBottom: '10px'}}>
						<p style={{paddingRight: 20}}><i className="fa-regular fa-calendar-days" style={{paddingRight: 8}}></i>{newsDate}</p>					    	
					    { author === null ?
				    		(<p><i className="fa-solid fa-user" style={{paddingRight: 8}}></i>Unknown</p>) :
				    		(<p><i className="fa-solid fa-user" style={{paddingRight: 8}}></i>{author}</p>)
				    	}
					</div>
					{ urlToImage === null ? 
						(<img className="selected-news-img" style={{width: '100%', height: '400px', paddingBottom: '20px'}} src="https://img.icons8.com/color/344/no-image.png" alt="newsPic"/>) : 
						(<img className="selected-news-img" style={{width: '100%', paddingBottom: '20px'}} src={urlToImage} alt="newsPic"/>) 
					}
					<div className="news-content pb-4">
						<p>{content}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default NewsDetails;