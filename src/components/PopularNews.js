import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchTopNews } from "../actions";

const PopularNews = ({ fetchTopNews }) => {
	const topHeadlines = useSelector((state) => state.topHeadlines);

	useEffect(() => {
		fetchTopNews("technology");
	}, [fetchTopNews]);

	const renderList = topHeadlines.map((topHeadline, index) => {
		const { title, url, urlToImage } = topHeadline;
		return (
			<div key={index} className="news-container pop-container">
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: "none" }}
				>
					<div style={{ paddingBottom: "10px" }}>
						{urlToImage === null ? (
							<img
								className="pop-img"
								src="https://img.icons8.com/color/344/no-image.png"
								alt="newsPic"
							/>
						) : (
							<img
								src={urlToImage}
								className="pop-img"
								alt="newsPic"
							/>
						)}
						<p className=" pop-title fw-bold">{title}</p>
					</div>
				</a>
			</div>
		);
	});

	return (
		<div className="col-md-3 pop-news">
			<h5
				className="pb-3 ptw-head"
				style={{ textDecoration: "underline" }}
			>
				Popular This Week
			</h5>
			<div>{renderList}</div>
		</div>
	);
};

export default connect(null, { fetchTopNews })(PopularNews);
