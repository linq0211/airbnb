import myRequest from "../request"

export function getHomeGoodPriceData() {
  return myRequest.get({
    url: "/home/goodprice",
  })
}

export function getHomeHighScoreData() {
  return myRequest.get({
    url: "/home/highscore",
  })
}

export function getHomeDiscountData() {
  return myRequest.get({
    url: "/home/discount",
  })
}

export function getHomePlusData() {
  return myRequest.get({
    url: "/home/plus",
  })
}

export function getHomeHotRecommendData() {
  return myRequest.get({
    url: "/home/hotrecommenddest",
  })
}

export function getHomeLongForData() {
  return myRequest.get({
    url: "/home/longfor",
  })
}
