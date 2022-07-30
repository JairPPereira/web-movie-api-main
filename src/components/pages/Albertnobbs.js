import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Albertnobbs extends Component {
    player = {}
    state = {
        video: {
            src: "https://cdnapisec.kaltura.com/p/513551/sp/51355100/playManifest/entryId/1_hon8tcs9/format/applehttp/protocol/https/flavorIds/1_1dgre6m6,1_5418gt6x,1_13ujo6tj,1_eig5y4kg,1_3knwsrex,1_qo6wg3g6/preferredBitrate/1500/maxBitrate/10000/a.m3u8?timestamp=1657570151&id=904&ip=167.249.209.218&override_expiration=1500&sign=FVTen8HHGBywwXKg3n5DbcTY%2FojAI0Lu0cgooulFIg4%3D&playSessionId=64c15bf3-ac88-dc2e-3362-6f75adf4d2ab:0aac8de6-2d41-146a-cbcd-bac35e516bb0&referrer=aHR0cHM6Ly93d3cucnVudGltZS50di9wdC1ici9mZWF0dXJlL2FsYmVydC1ub2Jicw==&clientTag=html5:v7.49",

            poster: ""
        }
    }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
 
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
 
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
 
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
 
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
 
    onVideoEnd(){
        console.log("Video ended");
    }
 
    render() {
        return (
            <div>
                      <p><br /></p>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720px" 
                    height="auto"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                    <p><br /></p> 
               <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>
            
        );
    }
}
export default Albertnobbs;