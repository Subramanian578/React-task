import React from 'react';
import './Tarvel.css';

function App() {
  return (
    <div>
    <header>
      <body>
        <nav>
          <div class="nav__logo"><h1>Traveller...!</h1></div>
          <ul class="nav__links">
            <li class="link">Home</li>
            <li class="link">Features</li>
            <li class="link">About Us</li>
            <li class="link">Contact Us</li>
          </ul>
        </nav>
        <div class="container">
          <div class="container__left">
            <div class="content">
              <h1>Take only memories, leave only footprints.</h1>
              <p>
                Twenty years from now you will be more disappointed by
                the things that you didn't do than by the ones you did do.
                So throw off the bowlines, sail away from safe harbor,
                  catch the trade winds in your sails. 
                  Explore! Dream! Discover!<br/><br/>
                  <h3 class="Quote">"I want someone to look at me the way I look at a travel magazine"</h3>
                </p>
            </div>
          </div>
          <div class="container_right">
            <form>
              <h4>Start your Journey..!</h4>
              <div class="form__group">
                <label for="destination">Destination</label>
                <input type="text" id="destination" placeholder="Enter destination"/>
              </div>
              <div class="form__group">
                <label for="trans">Transport</label>
                <input type="text" id="trans" placeholder="Enter the mode of transport"/>
              </div>
              <div class="form__group">
                <label for="date">Date</label>
                <input type="text" id="date" placeholder="dd-mm-yyyy"/>
              </div>
              <button type="submit">Book Now</button>
            </form>
          </div>
        </div>
        <div class="bottom"><br/>
          <h4>Some places to visit..!</h4><br/>
          <div class="places">
            <div class="image1">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/rameshwaram/mmt/destination/m_destination_rameshwaram_landscape_l_400_640.jpg" alt=""></img>
              <h4>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Rameshwaram</h4></div>
            <div class="image2">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/destination/m_destination_Amritsar_l_367_623.jpg" alt=""></img>
              <h4>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Amristar</h4></div>
            <div class="image3">
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/destination/m_Ooty_activity_mountains_l_368_613.jpg" alt=""></img>
              <h4>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Ooty</h4></div>            
          </div>
          <div class="places">
            <div class="image1"><br/><br/>
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/varkala/mmt/destination/m_destination_Varkala_landscape_l_400_640.jpg" alt=""></img>
              <h4>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Varkala</h4></div>
            <div class="image2"><br/><br/><br/>
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/destination/m_Pondicherry_activity_beach_l_382_691.jpg" alt=""></img>
              <h4>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Pondicherry</h4></div>
            <div class="image3"><br/><br/>
              <img src="https://hblimg.mmtcdn.com/content/hubble/img/shimla/mmt/destination/m_landscape_l_400_640.jpg" alt=""></img>
              <h4>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Shimla</h4></div>            
          </div>
        </div>
      </body>
    </header>
    </div>
  );
}

export default App;