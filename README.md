# The Hacker News App (clone)

This is a [thehackernews.com](https://thehackernews.com/) clone. You can search any news on the search bar, page through the results using the pagination at the bottom of the page, and select any news you would want to see in detail. This project was made using React and Redux, and the UI styling was done with Bootstrap. The data displayed (news articles) was obtained from the [Google NewsApi](https://newsapi.org/).

---

## Page Breakdown

1. **Header:** By clicking on the logo (_THE HACKER NEWS_) you will be redirected to the home page.
2. **Search Bar:** You can type in your search, clear out what you have typed using the 'x' button at the right side of the search bar, and do a search either by pressing the 'Enter' key or by clicking the blue search icon at the right side of the search bar. You can also clear out the search bar on focus.
3. **News List:** When you select the news you would want to see in detail, you will be redirected to another page where the selected news will be expanded and the content of the news will be accessed.
4. **Popular This Week:** This section has the same functionality as the News List (^).
5. **Pagination:** You can page through the news articles by clicking either the number, the previous, or the next buttons. When doing a new search or when clicking the logo, the page 1 of the pagination will become active.

---
