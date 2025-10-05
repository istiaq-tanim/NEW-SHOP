
function Ratings({ rating }) {
      let yellowStar = []
      let grayStar = []
      if (rating < 5) {
            yellowStar = [...Array(rating).fill("★")]
            grayStar = [...Array(5 - rating).fill("★")]
      } else {
            yellowStar = [...Array(rating).fill("★")]
      }

      return (
            <div className="flex">
                  {
                        yellowStar.map((item, index) => <span key={index} className="text-yellow-400">{item}</span>)
                  }

                  {grayStar.length > 0 &&
                        grayStar.map((item, index) => <span key={index} className="text-gray-400">{item}</span>)
                  }
            </div>
      )
}

export default Ratings
