import sql from 'better-sqlite3';

const db = sql('data.db');

export async function getAllNews() {
    try {
        const news = db.prepare('SELECT * FROM news').all();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return news;
    } catch (error) {
        console.error('Error fetching all news:', error);
        throw error;
    }
}

export async function getNewsItem(slug) {
    try {
        const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return newsItem;
    } catch (error) {
        console.error('Error fetching news item:', error);
        throw error;
    }
}

export async function getLatestNews() {
    try {
        const latestNews = db
            .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
            .all();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return latestNews;
    } catch (error) {
        console.error('Error fetching latest news:', error);
        throw error;
    }
}

export async function getAvailableNewsYears() {
    try {
        const years = db
            .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
            .all()
            .map((year) => year.year);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        return years;
    } catch (error) {
        console.error('Error fetching available news years:', error);
        throw error;
    }
}

export function getAvailableNewsMonths(year) {
    try {
        return db
            .prepare(
                "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
            )
            .all(year)
            .map((month) => month.month);
    } catch (error) {
        console.error('Error fetching available news months:', error);
        throw error;
    }
}

export async function getNewsForYear(year) {
    try {
        const news = db
            .prepare(
                "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
            )
            .all(year);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        return news;
    } catch (error) {
        console.error('Error fetching news for year:', error);
        throw error;
    }
}

export async function getNewsForYearAndMonth(year, month) {
    try {
        const news = db
            .prepare(
                "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
            )
            .all(year, month);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        return news;
    } catch (error) {
        console.error('Error fetching news for year and month:', error);
        throw error;
    }
}
