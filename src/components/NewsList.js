import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

const NewsList = ({ index }) => {
	const pageNumber = useSelector((state) => state.pageNumber);
	const newsPerPage = 10;
	const firstNewsOnPage = pageNumber * newsPerPage;
	const realIndex = index + newsPerPage * pageNumber;
	const mainNews = useSelector((state) =>
		state.mainNews.slice(firstNewsOnPage, firstNewsOnPage + newsPerPage)
	);
	const { title, urlToImage, url, author, description, publishedAt } =
		mainNews[index];

	const time = new Date(publishedAt).getTime();
	const day = new Date(time).getDate();
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const month = monthNames[new Date(time).getMonth()];
	const year = new Date(time).getFullYear();
	const newsDate = `${month} ${day}, ${year}`;

	return (
		<div key={realIndex} className="news-container pb-3">
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				style={{ textDecoration: "none" }}
			>
				<div className="nl-container">
					{urlToImage === null ? (
						<img
							className="news-img"
							src="https://img.icons8.com/color/344/no-image.png"
							alt="newsPic"
						/>
					) : (
						<img
							className="news-img"
							src={urlToImage}
							alt="newsPic"
						/>
					)}
					<p
						className="news-title fw-bold"
						style={{ overflow: "hidden" }}
					>
						{title}
					</p>
					<div
						className="d-inline-flex date-author"
						style={{ overflow: "hidden" }}
					>
						<p style={{ paddingRight: 20 }}>
							<i
								className="fa-regular fa-calendar-days"
								style={{ paddingRight: 8 }}
							></i>
							{newsDate}
						</p>
						{author === null ? (
							<p>
								<i
									className="fa-solid fa-user"
									style={{ paddingRight: 8 }}
								></i>
								Unknown
							</p>
						) : author ? (
							author.replace(/(?:https?|ftp):\/\/[\n\S]+/g, "")
						) : (
							<p>
								<i
									className="fa-solid fa-user"
									style={{ paddingRight: 8 }}
								></i>
								{author}
							</p>
						)}
					</div>
					<p
						className="news-description"
						style={{ overflow: "hidden" }}
					>
						{description}
					</p>
				</div>
				<hr />
			</a>
		</div>
	);
};

export default NewsList;
