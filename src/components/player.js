import React, {Component} from 'react'
import '../css/player.css'
import Hls from 'hls.js'

export default class Player extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playPauseText: "Play"
        }
        
        this._onClickPlay = this._onClickPlay.bind(this);
    }

    componentDidMount() {
        if (Hls.isSupported() && this.player) {
            const video = this.player;
            var hls = new Hls();
            const streamUrl = "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8";
            hls.loadSource(streamUrl);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                console.log("MANIFEST_PARSED: now play video");
                this.player.pause()
            })
        } else {
            console.log("Hls is not supported or this.player not constructed")
        }
    }

    _onClickPlay() {
        if (this.player.paused) {
            this.player.play()
            this.setState({ playPauseText: "Pause" })
            
        } else {
            this.player.pause()
            this.setState({ playPauseText: "Play" })
        }
    }

    render() {
        const style = {
            width: 640,
            height: 360,
            background: '#000',
        }

        return (<div className="player-wrapper">
            <div className="player-inner">
                <video style={style} ref={(player) => this.player = player} autoPlay={true} > </video>
            </div>
            <button onClick={this._onClickPlay} >{this.state.playPauseText}</button>
        </div>)
    }
}
