const puppeteer = require('puppeteer');

const getLyrics = async (song, artist) => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Construct the URL with the song and artist parameters
  const url = `https://www.azlyrics.com/lyrics/${artist.toLowerCase()}/${song.toLowerCase()}.html`;

  // Go to the URL and wait for the page to load
  await page.goto(url);
  await page.waitForSelector('.col-xs-12.col-lg-8.text-center');

  // Extract the lyrics from the page
  const lyrics = await page.$eval('.col-xs-12.col-lg-8.text-center', (element) => element.innerText);

  // Close the browser
  await browser.close();

  // Return the lyrics
  return lyrics.trim();
};

module.exports = { getLyrics };
