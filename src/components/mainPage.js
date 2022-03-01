import { url } from '../modules/Url'
import axios from 'axios'

const getEvents = async () => {
  try {
    const response = await axios.get(
      `${url}/getEvents`
    );
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}

const addEvent = async () => {
  try {
    const response = await axios.put(
      `${url}/addEvent`,
      [
        1,
        "테스트합주",
        "1900-00-00 00:00:01",
        "1901-00-00 00:00:01",
        "1902-00-00 00:00:01"
      ]
    );
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}

function Main() {
  return (
    <div>
      MainPage
      <button onClick={getEvents}>
        getEvents
      </button>
      <button onClick={addEvent}>
        addEvents
      </button>
    </div>
  )
}

export default Main;
