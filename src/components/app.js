import React from 'react';
import Player from './player'

export default class App extends React.Component {
    
    render() {
        return (
           <div className="app">
               <div className="live-video">
                   <Player />
               </div>
           </div>
        )
    }

}
