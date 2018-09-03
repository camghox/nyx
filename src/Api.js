import axios from 'axios';

const APIBASE = 'http://nyx.xifenhezi.com';
const PLAYTYPE = ['','LUN','DING','NN','TB'];

class Api {

    constructor(){
        this.storage = window.localStorage;
    }

    mid(){
        return this.storage.getItem("mid");
    }
    
    avatar(){
        return this.storage.getItem("avatar");
    }

    nickname(){
        return this.storage.getItem("nickname");
    }

    token(){
        return this.storage.getItem("token");
    }

    roomnum(){
        return this.storage.getItem("room_room_num");
    }

    roomid(){
        return this.storage.getItem("room_rid");
    }

    rid(){
        return this.storage.getItem("room_rid");
    }

    rrid(){
        return this.storage.getItem("round_rrid");
    }

    cards(){
        return this.storage.getItem("round_cards");
    }

    roominfo(){
        var playtype = this.storage.getItem("room_playtype");
        return {
            rid: this.storage.getItem("room_rid"),
            playtype: playtype,
            playtypestr: PLAYTYPE[playtype],
            base: this.storage.getItem("room_base"),
            rrid: this.storage.getItem("room_rrid"),
            rridx: this.storage.getItem("room_rridx"),
            spectype: this.storage.getItem("room_spectype"),
            rules: this.storage.getItem("room_rules"),
            roomnum: this.storage.getItem("room_room_num"),
            round: this.storage.getItem("room_round"),
            paytype: this.storage.getItem("room_paytype"),
        };
    }

    profile(){
        return {
            mid: this.storage.getItem("mid"),
            nickname: this.storage.getItem("nickname"),
            avatar: this.storage.getItem("avatar"),
            coin: this.storage.getItem("coin"),
            ingot: this.storage.getItem("ingot"),
        };
    }

    login(did, openid, callback){
        var self = this;
        var params = {
            did:did,
            openid:openid,
        };
        axios.post(APIBASE + '/nyxgame/member/login', params)
        .then(res => {
            console.info(res.data);
            if (res.data && res.data.member) {
                self.store('', res.data.member);
                if (callback) callback(res.data);
            }
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
    }

    create(params, callback){
        var self = this;
        axios.post(APIBASE + '/nyxgame/niuniu/create', params)
        .then(res => {
            //console.info(res.data);
            if (res.data && callback) {
                if (res.data.room) {
                    self.store('room', res.data.room);
                }
                callback(res.data);
            }
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
        //console.info(params);
    }

    join(rid, callback){
        var self = this;
        var params = {
            token:this.token(),
            rid:rid,
        };
        axios({
            method: 'post',
            url:APIBASE + '/nyxgame/niuniu/join',
            data: params,
        })
        .then(res => {
            //console.info(res.data);
            if (res.data && callback) {
                if (res.data.room) {
                    self.store('room', res.data.room);
                }
                callback(res.data);
            }
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
        //console.info(params);
    }

    start(callback){
        var params = {
            token:this.token(),
            rid:this.roomid(),
        };
        axios.post(APIBASE + '/nyxgame/niuniu/start', params)
        .then(res => {
            console.info(res.data);
            if (res.data && callback) callback(res.data);
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
        //console.info(params);
    }

    getstate(callback){
        var self = this;
        var params = {
            token:this.token(),
            rid:this.roomid(),
        };
        axios.post(APIBASE + '/nyxgame/niuniu/state', params)
        .then(res => {
            console.info(res.data);
            this.store('round', res.data);
            if (res.data && callback) callback(res.data);
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
        //console.info(params);
    }

    mycards(callback){
        var self = this;
        var params = {
            token:this.token(),
            rid:this.roomnum(),
            rrid:this.rrid(),
        };
        axios.post(APIBASE + '/nyxgame/niuniu/mycards', params)
        .then(res => {
            console.info(res.data);
            if (res.data && res.data.card) {
                self.storecards(res.data.card);
            }
            if (res.data && callback) callback(res.data);
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
        //console.info(params);
    }

    playout(callback){
        var params = {
            token:this.token(),
            rid:this.rid(),
            rrid:this.rrid(),
            cards:this.cards(),
        };
        axios.post(APIBASE + '/nyxgame/niuniu/playout', params)
        .then(res => {
            console.info(res.data);
            if (res.data && callback) callback(res.data);
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
        //console.info(params);
    }

    results(callback){
        var params = {
            token:this.token(),
            rid:this.rid(),
            rrid:this.rrid(),
        };
        axios.post(APIBASE + '/nyxgame/niuniu/results', params)
        .then(res => {
            console.info(res.data);
            if (res.data && callback) callback(res.data);
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
        //console.info(params);
    }

    players(callback){
        var params = {
            token:this.token(),
            rid:this.roomid(),
        };
        axios.post(APIBASE + '/nyxgame/niuniu/players', params)
        .then(res => {
            //console.info(res.data);
            if (res.data && callback) callback(res.data);
        })
        .catch(function(err){
            console.log(err);
            alert(err);
        });
        //console.info(params);
    }

    store(prefix, data){
        for (var k in data) {
            if (prefix && prefix.length > 0)
                this.storage.setItem(prefix + '_' + k, data[k]);
            else
                this.storage.setItem(k, data[k]);
        }
    }

    storecards(cards){
        var cardsarr = [];
        for (var k in cards) {
            var card = cards[k];
            cardsarr.push(card['cid'] + ":" + card['value'] + ":" + card['color']);
        }
        this.storage.setItem('round_cards', cardsarr.join(";"));
    }
}

export default Api;
