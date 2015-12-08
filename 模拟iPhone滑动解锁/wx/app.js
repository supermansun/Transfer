var res = {
        time: "res/image_time.png",
        inputBox: "res/image_input-box_small.png",
        send_n: "res/image_fasong_n.png",
        send_p: "res/image_fasong_p.png",
        ring: "res/ring.mp3",
        send: "res/send.mp3",
        receive: "res/receive.mp3",
        music_pause: "res/music_pause.png",
        music_play: "res/music_play.png",
        bg1: "res/image_1.png",
        circle: "res/image_round.png",
        slider: "res/image_huadong.png",
        input1: "res/image_input-box_big_1.png",
        wifeWord1: "res/image_talk_wife_1.png",
        wifeWord2: "res/image_talk_wife_2.png",
        wifeWord3: "res/image_talk_wife_3.png",
        myWord1: "res/image_talk_me_1.png",
        myInputWord1: "res/image_word_2-2.png",
        wifeWord4: "res/image_talk_wife_4.png",
        pop: "res/image_pop-up.png",
        tips: "res/circle.png",
        input2: "res/image_input-box_big_2.png",
        fatherWord1: "res/image_talk_father_1.png",
        fatherWord2: "res/image_talk_father_2.png",
        fatherWord3: "res/image_talk_father_3.png",
        myWord2: "res/image_talk_me_2.png",
        myInputWord2: "res/image_word_3-2.png",
        fatherWord4: "res/image_talk_father_4.png",
        phoneCall: "res/image_4-1.png",
        sliderBg: "res/image_4-1_phone_bg.png",
        sliderPhone: "res/image_phone.png",
        answerPhone: "res/image_4-2_2.png",
        babyVoice: "res/babytalk_new.mp3",
        msg1: "res/title_5_1.png",
        msg2: "res/title_5_2.png",
        white: "res/baibian.png",
        j_bg1: "res/img_bg_1_1.png",
        j_bg2: "res/img_bg_1_2.png",
        j_bg3: "res/img_bg_1_3.png",
        j_rain1: "res/rain_1.png",
        j_rain2: "res/rain_2.png",
        j_rain3: "res/rain_3.png",
        j_rain4: "res/rain_4.png",
        j_wife1: "res/img_1_wife.png",
        j_arm1: "res/img_arm_1.png",
        j_parents1: "res/img_1_parents.png",
        j_daughter1: "res/img_1_daughter.png",
        f_bg: "res/img_2_bg.jpg",
        f_daughter: "res/img_2_daughter.png",
        f_man: "res/img_2_man.png",
        f_parents: "res/img_2_parents.png",
        f_wife: "res/img_2_wife.png",
        f_title1: "res/title_2_1.png",
        f_title2: "res/title_2_2.png",
        f_title3: "res/title_2_3.png",
        f_title4: "res/title_2_4.png",
        f_sofa: "res/img_2_sofa.png",
        f_frame: "res/img_2_xk.png",
        shutterSound: "res/shutter_sound.mp3",
        share_p: "res/btn_share_p.png",
        share_n: "res/btn_share_n.png",
        shareBg: "res/share.png"
    },
    g_resources = [],
    i;
for (i in res) g_resources.push(res[i]);
var timerSec = 0,
    timerMin = 0,
    timerTenMin = 0,
    first = 1,
    _F = !1,
    BgLayer = cc.Layer.extend({
        ctor: function(a, b) {
            this._super();
            var c = new cc.LayerColor(b);
            console.log("------------bgLayer:",b);
            this.addChild(c);
            a && (this.bgSprite = new cc.Sprite(a), this.bgSprite.setPosition(cc.visibleRect.center), this.addChild(this.bgSprite))
        }
    }),
    TalkLayer = BgLayer.extend({
        arrImg: [],
        arrWord: [],
        ctor: function(a) {
            this._super(null, cc.color(232, 232, 232));
            this.arrImg = [];
            this.arrWord = [];
            this.arrImg = a;
            a = new cc.Sprite(res.time);
            a.anchorY = 1;
            a.setPosition(cc.pAdd(cc.visibleRect.top, cc.p(0, -30)));
            this.addChild(a);
            this.inputBox = new cc.Sprite(res.inputBox);
            this.inputBox.anchorY = 0;
            this.inputBox.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p(0, 0)));
            this.addChild(this.inputBox);
            for (a = 0; 4 >= a; a++) {
                var b = new cc.Sprite(this.arrImg[a]);
                b.anchorY = 1;
                b.opacity = 0;
                3 != a ? (b.anchorX = 0, b.setPosition(cc.pAdd(cc.visibleRect.topLeft, cc.p(10, 140 * -a - 100)))) : (b.anchorX = 1, b.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p( - 10, 140 * -a - 100))));
                this.addChild(b);
                this.arrWord.push(b)
            }
            this.talk()
        },
        talk: function() {
            var a = this,
                b = 0,
                c = function() {
                    a.arrWord[b].runAction(cc.sequence(cc.delayTime(2 * b + 1), cc.callFunc(function() {
                            cc.audioEngine.playEffect(res.send)
                        },
                        this), cc.fadeIn(0.2)));
                    b += 1;
                    3 > b ? c() : a.scheduleOnce(a.showInputBox, 6.5)
                };
            c()
        },
        showInputBox: function() {
            this.inputBox.setTexture(this.arrImg[5]);
            var a = new cc.ProgressTimer(new cc.Sprite(this.arrImg[6]));
            a.anchorX = 0;
            a.type = cc.ProgressTimer.TYPE_BAR;
            a.midPoint = cc.p(0, 0.5);
            a.barChangeRate = cc.p(1, 0);
            a.attr({
                x: cc.winSize.width / 2 - 170,
                y: this.inputBox.height - 50
            });
            this.inputBox.addChild(a);
            a.runAction(cc.sequence(cc.delayTime(0.5), cc.progressTo(1.5, 100), cc.delayTime(0.3), cc.callFunc(this.sendActive, this)));
            var b = new cc.MenuItemImage(res.send_n, res.send_p,
                function() {
                    b.stopAllActions();
                    this.sendMsg()
                },
                this);
            b.setAnchorPoint(1, 0);
            b.setPosition(cc.pAdd(cc.visibleRect.bottomRight, cc.p( - 15, 10)));
            this.btn = new cc.Menu(b);
            this.btn.attr({
                x: 0,
                y: 0,
                enabled: !1
            });
            this.addChild(this.btn)
        },
        sendActive: function() {
            this.btn.enabled = !0;
            var a = this.btn.getChildren()[0],
                b = cc.sequence(cc.scaleTo(0.1, 1.03), cc.delayTime(0.1), cc.scaleTo(0.1, 1.05), cc.delayTime(0.1), cc.scaleTo(0.3, 1), cc.delayTime(0.3));
            a.runAction(b.repeatForever())
        },
        sendMsg: function() {
            cc.audioEngine.playEffect(res.send);
            this.btn.setEnabled(!1);
            this.btn.removeFromParent();
            this.inputBox.setTexture(res.inputBox);
            this.inputBox.getChildren()[0].removeFromParent();
            this.arrWord[3].runAction(cc.sequence(cc.fadeIn(0.2), cc.delayTime(0.5), cc.callFunc(function() {
                    this.arrWord[4].runAction(cc.sequence(cc.callFunc(function() {
                            cc.audioEngine.playEffect(res.send)
                        },
                        this), cc.fadeIn(0.2), cc.delayTime(1), cc.callFunc(function() {
                            this.nextLayer()
                        },
                        this)))
                },
                this)))
        }
    }),
    ShareLayer = cc.Layer.extend({
        ctor: function(a) {
            this._super();
            var b = this,
                c = new cc.LayerColor(cc.color(0, 0, 0, 200));
            this.addChild(c);
            a = new cc.Sprite(a);
            a.anchorY = 1;
            a.setPosition(cc.pAdd(cc.visibleRect.top, cc.p(0, -100)));
            this.addChild(a);
            var d = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: !0,
                onTouchBegan: function() {
                    return ! 0
                },
                onTouchMoved: function(a) {},
                onTouchEnded: function() {
                    b.removeFromParent();
                    cc.eventManager.removeListener(d);
                    return ! 0
                }
            });
            cc.eventManager.addListener(d, a)
        }
    }),
    MusicLayer = cc.Layer.extend({
        ctor: function() {
            this._super();
            var a = document.getElementById("bgAudio");
            first && (playMusic(!0), first = 0);
            var b = new cc.Sprite;
            a.paused ? b.setTexture(res.music_pause) : (b.setTexture(res.music_play), b.runAction(cc.rotateBy(1, 72).repeatForever()));
            b.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p( - 50, -60)));
            this.addChild(b, 99);
            var c = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: !1,
                onTouchBegan: function() {
                    return ! 0
                },
                onTouchEnded: function(c, e) {
                    var f = e.getCurrentTarget(),
                        g = f.getContentSize(),
                        g = cc.rect(0, 0, g.width, g.height),
                        f = f.convertTouchToNodeSpace(c);
                    cc.rectContainsPoint(g, f) && (a.paused ? (playMusic(!0), b.setTexture(res.music_play), b.runAction(cc.rotateBy(1, 72).repeatForever())) : (playMusic(!1), b.stopAllActions(), b.setTexture(res.music_pause)));
                    return ! 0
                }
            });
            cc.eventManager.addListener(c, b)
        }
    }),
    CanMoveSprite = cc.Sprite.extend({
        onEnter: function() {
            this._super();
            this.addTouch()
        },
        addTouch: function() {
            var a = this;
            cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(a, c) {
                        return ! 0
                    },
                    onTouchMoved: function(b, c) {
                        var d = c.getCurrentTarget(),
                            e = d.getContentSize(),
                            e = cc.rect(0, 0, e.width, e.height),
                            d = d.convertTouchToNodeSpace(b);
                        cc.rectContainsPoint(e, d) && (d = b.getDelta(), a.x >= a.minX && a.x <= a.maxX && (a.x += d.x));
                        return ! 0
                    },
                    onTouchEnded: function(b, c) {
                        a.x >= a.maxX - 30 ? a.getParent().getParent().answer() : a.runAction(cc.moveTo(0.2, a.minX, a.y));
                        return ! 0
                    }
                },
                this)
        }
    }),
    playMusic = function(a) {
        var b = document.getElementById("bgAudio");
        a ? b.paused && b.play() : b.paused || b.pause()
    };
var StartLayer = BgLayer.extend({
        ctor: function() {
            this._super(res.bg1, cc.color(22, 22, 24));
            var a = new cc.LayerColor(cc.color(255, 255, 255, 40), 300, 60);
            a.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p( - 165, 100)));
            this.addChild(a, 1);
            a = new cc.Sprite(res.slider);
            a.anchorY = 0;
            a.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p( - 15, 100)));
            this.addChild(a, 3);
            this.addTouch();
            this.sliderEffect()
        },
        addTouch: function() {
            var a = this;
            cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    canNext: !1,
                    onTouchBegan: function(a, c) {
                        return ! 0
                    },
                    onTouchMoved: function(b, c) {
                        var d = b.getDelta(); - 30 < a.x && (a.x += d.x);
                        60 < d.x && (this.canNext = !0);
                        return ! 0
                    },
                    onTouchEnded: function(b, c) {
                        this.canNext ? a.nextLayer() : a.runAction(cc.moveTo(0.2, cc.visibleRect.bottomLeft));
                        return ! 0
                    }
                },
                this)
        },
        sliderEffect: function() {
            cc.audioEngine.playEffect(res.receive);
            var a = new cc.Sprite(res.circle);
            a.anchorX = 0;
            a.anchorY = 0;
            a.scale = 0.9;
            a.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p( - 165, 100)));
            this.addChild(a, 2);
            var b = cc.sequence(cc.moveBy(1.5, 250, 0), cc.callFunc(function() {
                    a.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p( - 165, 100)))
                },
                this));
            a.runAction(b.repeatForever())
        },
        nextLayer: function() {
            this.getParent().addChild(new WifeTalk);
            this.removeFromParent()
        }
    }),
    WifeTalk = TalkLayer.extend({
        ctor: function() {
            this._super([res.wifeWord1, res.wifeWord2, res.wifeWord3, res.myWord1, res.wifeWord4, res.input1, res.myInputWord1])
        },
        nextLayer: function() {
            cc.audioEngine.playEffect(res.receive);
            var a = new cc.MenuItemImage(res.pop, res.pop,
                function() {
                    this.fatherLayerIn()
                },
                this);
            a.anchorY = 1;
            a.setPosition(cc.visibleRect.top);
            this.popBtn = new cc.Menu(a);
            this.popBtn.attr({
                x: 0,
                y: 0
            });
            this.addChild(this.popBtn);
            a = new cc.Sprite(res.tips);
            a.scale = 0.3;
            a.setPosition(cc.pAdd(cc.visibleRect.top, cc.p(0, -a.height / 2 + 15)));
            this.addChild(a);
            var b = cc.sequence(cc.scaleTo(0.1, 0.7), cc.delayTime(0.1), cc.scaleTo(0.1, 0.85), cc.delayTime(0.1), cc.scaleTo(0.3, 0.7), cc.delayTime(0.3));
            a.runAction(b.repeatForever())
        },
        fatherLayerIn: function() {
            this.popBtn.enabled = !1;
            this.getParent().addChild(new FatherTalk);
            this.removeFromParent()
        }
    }),
    FatherTalk = TalkLayer.extend({
        ctor: function() {
            this._super([res.fatherWord1, res.fatherWord2, res.fatherWord3, res.myWord2, res.fatherWord4, res.input2, res.myInputWord2])
        },
        nextLayer: function() {
            this.getParent().addChild(new PhoneLayer);
            this.removeFromParent()
        }
    }),
    PhoneLayer = BgLayer.extend({
        time: 0,
        ctor: function() {
            this._super(res.phoneCall, cc.color(22, 22, 24));
            this.slider = new cc.Sprite(res.sliderBg);
            this.slider.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p(0, 250)));
            this.addChild(this.slider, 2);
            var a = new CanMoveSprite(res.sliderPhone);
            a.anchorX = 0;
            a.setPosition(10, this.slider.height / 2);
            a.minX = a.x;
            a.maxX = a.x + this.slider.width - a.width - 30;
            this.slider.addChild(a);
            this.sliderEffect()
        },
        sliderEffect: function() {
            cc.audioEngine.playMusic(res.ring);
            this.circle = new cc.Sprite(res.circle);
            this.circle.anchorX = 0;
            this.circle.scale = 1.3;
            this.circle.opacity = 150;
            this.circle.setPosition(cc.pAdd(this.slider.getPosition(), cc.p( - this.slider.width / 2 + 130, 0)));
            this.addChild(this.circle, 0);
            var a = cc.sequence(cc.moveBy(1.3, 250, 0), cc.callFunc(function() {
                    this.circle.setPosition(cc.pAdd(this.slider.getPosition(), cc.p( - this.slider.width / 2 + 130, 0)))
                },
                this));
            this.circle.runAction(a.repeatForever())
        },
        answer: function() {
            cc.audioEngine.stopMusic();
            this.circle.removeFromParent();
            this.slider.getChildren()[0].runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(function() {
                    this.slider.getChildren()[0].removeFromParent()
                },
                this)));
            this.slider.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(function() {
                    this.slider.removeFromParent()
                },
                this)));
            this.bgSprite.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(function() {
                    this.bgSprite.setTexture(res.answerPhone)
                },
                this), cc.fadeIn(0.3), cc.callFunc(this.timerActive, this)))
        },
        timerActive: function() {
            cc.audioEngine.playEffect(res.babyVoice);
            this.labelTimerSec = new cc.LabelTTF("0" + timerSec, "Arial", 38);
            this.labelTimerSec.anchorX = 0;
            this.labelTimerMin = new cc.LabelTTF("0" + timerMin + " :", "Arial", 38);
            this.labelTimerMin.anchorX = 0;
            this.labelTimerMin.setPosition(cc.pAdd(cc.visibleRect.top, cc.p( - 55, -200)));
            this.labelTimerSec.setPosition(cc.pAdd(this.labelTimerMin.getPosition(), cc.p(76, 0)));
            this.addChild(this.labelTimerSec);
            this.addChild(this.labelTimerMin);
            this.schedule(this.setTimer, 1)
        },
        setTimer: function() {
            timerSec += 1;
            60 <= timerSec ? (timerSec -= 60, 10 > timerSec ? this.labelTimerSec.setString("0" + timerSec) : this.labelTimerSec.setString(timerSec), timerMin += 1, 9 < timerMin && (timerMin -= 10, Number(timerTenMin), timerTenMin += 1), this.labelTimerMin.setString(timerTenMin.toString() + timerMin + " :")) : 10 > timerSec ? this.labelTimerSec.setString("0" + timerSec) : this.labelTimerSec.setString(timerSec);
            this.time += 1;
            13 <= this.time && this.endPhone()
        },
        endPhone: function() {
            var a = this.getChildren(),
                b;
            for (b in a) a[b].runAction(cc.sequence(cc.fadeOut(0.5), cc.delayTime(0.3), cc.callFunc(function() {
                    this.getParent().addChild(new LastLayer);
                    this.removeFromParent()
                },
                this)))
        }
    }),
    LastLayer = BgLayer.extend({
        ctor: function() {
            this._super(res.f_bg, cc.color(22, 22, 24));
            var a = new cc.Sprite(res.msg1);
            a.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, 50)));
            a.opacity = 0;
            this.addChild(a);
            var b = new cc.Sprite(res.msg2);
            b.setAnchorPoint(0.5, 1);
            b.setPosition(cc.pAdd(a.getPosition(), cc.p(0, -50)));
            b.opacity = 0;
            this.addChild(b);
            this.msgActive([a, b])
        },
        msgActive: function(a) {
            a[0].runAction(cc.sequence(cc.fadeIn(2)));
            a[1].runAction(cc.sequence(cc.delayTime(2.2), cc.fadeIn(2)));
            for (var b in a) a[b].runAction(cc.sequence(cc.delayTime(5.3), cc.spawn(cc.fadeOut(2), cc.moveBy(2, 0, 35)), cc.callFunc(function() {
                    this.getParent().addChild(new JimmyLayer);
                    this.removeFromParent()
                },
                this)))
        }
    }),
    JimmyLayer = BgLayer.extend({
        ctor: function() {
            this._super(null, cc.color(255, 255, 255));
            var a = new cc.Sprite(res.white);
            a.setPosition(cc.visibleRect.center);
            this.addChild(a, 4);
            this.initTop()
        },
        initTop: function() {
            var a = new cc.Sprite(res.j_bg1);
            a.setAnchorPoint(1, 1);
            a.setPosition(cc.visibleRect.topLeft);
            this.addChild(a);
            this.topAction(a)
        },
        topAction: function(a) {
            a.runAction(cc.sequence(cc.moveTo(1, cc.visibleRect.topRight), cc.delayTime(0.3), cc.callFunc(function() {
                    this.schedule(this.rainActive, 0.1, cc.REPEAT_FOREVER);
                    this.topNodeAction()
                },
                this)))
        },
        rainActive: function() {
            for (var a = [], b = 0; 15 >= b; b++) {
                var c = Math.ceil(4 * cc.random0To1()),
                    d = 20 * cc.random0To1(),
                    e = 20 * cc.random0To1(),
                    c = new cc.Sprite(res["j_rain" + c]);
                c.setAnchorPoint(0, 1);
                c.setPosition(cc.pAdd(cc.visibleRect.topLeft, cc.p(50 * b + d, -e)));
                this.addChild(c, 2);
                a.push(c);
                a[b].runAction(cc.sequence(cc.moveBy(2 * cc.random0To1() + 1, 0, -500), cc.callFunc(function() {
                        for (var b in a) a[b].removeFromParent()
                    },
                    this)))
            }
        },
        topNodeAction: function() {
            var a = new cc.Sprite(res.j_wife1);
            a.anchorY = 1;
            a.opacity = 0;
            a.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p( - 180, -45)));
            this.addChild(a);
            a.runAction(cc.sequence(cc.spawn(cc.moveTo(1.5, cc.pAdd(cc.visibleRect.topRight, cc.p( - 230, -45))), cc.fadeIn(1.5)), cc.callFunc(this.initMid.bind(this))))
        },
        initMid: function() {
            var a = new cc.Sprite(res.j_bg2);
            a.setAnchorPoint(0, 0.5);
            a.setPosition(cc.pAdd(cc.visibleRect.right, cc.p(0, 10)));
            this.addChild(a, 3);
            this.midAction(a)
        },
        midAction: function(a) {
            var b = new cc.Sprite(res.j_arm1);
            b.attr({
                anchorY: 0,
                x: a.width / 2 + 266,
                y: a.height / 2 - 50
            });
            a.addChild(b);
            var c = cc.rotateBy(1, 5);
            b.runAction(cc.sequence(c, c.reverse()).repeatForever());
            this.arm = b;
            a.runAction(cc.sequence(cc.moveTo(1, cc.pAdd(cc.visibleRect.left, cc.p( - 50, 10))), cc.delayTime(0.3), cc.callFunc(this.midNodeAction.bind(this))))
        },
        midNodeAction: function() {
            var a = new cc.Sprite(res.j_parents1);
            a.setPosition(cc.pAdd(cc.visibleRect.center, cc.p( - 100, 30)));
            a.attr({
                scale: 0.8,
                opacity: 0
            });
            this.addChild(a, 3);
            a.runAction(cc.sequence(cc.spawn(cc.fadeIn(1.5), cc.scaleTo(1.5, 1)), cc.delayTime(0.3), cc.callFunc(this.initBottom.bind(this))))
        },
        initBottom: function() {
            var a = new cc.Sprite(res.j_bg3);
            a.setAnchorPoint(1, 0);
            a.setPosition(cc.pAdd(cc.visibleRect.bottomLeft, cc.p(0, 0)));
            this.addChild(a);
            this.bottomAction(a)
        },
        bottomAction: function(a) {
            a.runAction(cc.sequence(cc.moveTo(1, cc.pAdd(cc.visibleRect.bottomRight, cc.p(0, 0))), cc.delayTime(0.3), cc.callFunc(this.bottomNodeAction.bind(this))))
        },
        bottomNodeAction: function() {
            var a = new cc.Sprite(res.j_daughter1);
            a.setAnchorPoint(0, 0);
            a.opacity = 0;
            a.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p(0, 0)));
            this.addChild(a);
            a.runAction(cc.sequence(cc.spawn(cc.moveBy(1.5, -100, 0), cc.fadeIn(0.8)), cc.delayTime(2.5), cc.callFunc(function() {
                    for (var a in this.getChildren()) this.arm.runAction(cc.fadeOut(1.2)),
                        this.getChildren()[a].runAction(cc.sequence(cc.fadeOut(1.5), cc.callFunc(function() {
                                this.getParent().addChild(new FamilyLayer);
                                this.removeFromParent()
                            },
                            this)))
                },
                this)))
        }
    }),
    FamilyLayer = BgLayer.extend({
        title: [],
        index: 0,
        ctor: function() {
            this._super(res.f_bg, cc.color(255, 255, 255));
            this.addChild(new MusicLayer, 99);
            this.frame = new cc.Sprite(res.f_frame);
            this.frame.opacity = 0;
            this.frame.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, -120)));
            this.addChild(this.frame, 3);
            this.init()
        },
        init: function() {
            var a = cc.p(this.frame.width / 2, this.frame.height / 2),
                b = this.frame.height / cc.winSize.height,
                c = new cc.Sprite(res.f_sofa);
            c.setPosition(cc.pAdd(a, cc.p(0, -300 * b + 80)));
            c.opacity = 0;
            this.frame.addChild(c, 1);
            c.runAction(cc.sequence(cc.fadeIn(1.2), cc.delayTime(0.2), cc.callFunc(this.peopleActive.bind(this))));
            c = new cc.Sprite(res.f_man);
            c.setPosition(cc.pAdd(a, cc.p(0, -40 * b + 80)));
            c.opacity = 0;
            this.frame.addChild(c);
            var d = new cc.Sprite(res.f_wife);
            d.setPosition(cc.pAdd(a, cc.p(70, -70 * b + 80)));
            d.opacity = 0;
            this.frame.addChild(d);
            var e = new cc.Sprite(res.f_parents);
            e.setPosition(cc.pAdd(a, cc.p(0, -260 * b + 80)));
            e.opacity = 0;
            this.frame.addChild(e, 1);
            var f = new cc.Sprite(res.f_daughter);
            f.setPosition(cc.pAdd(a, cc.p(15, -235 * b + 80)));
            f.opacity = 0;
            this.frame.addChild(f, 2);
            this.people = {
                man: c,
                woman: d,
                parents: e,
                daughter: f
            }
        },
        peopleActive: function() {
            this.people.parents.runAction(cc.sequence(cc.fadeIn(1.2), cc.delayTime(0.3), cc.callFunc(function() {
                    this.people.man.runAction(cc.sequence(cc.fadeIn(1.2), cc.delayTime(0.3), cc.spawn(cc.moveBy(1.2, -40, 0), cc.callFunc(function() {
                            this.people.woman.runAction(cc.sequence(cc.fadeIn(1.2), cc.callFunc(function() {
                                    this.people.daughter.runAction(cc.sequence(cc.fadeIn(1.2), cc.delayTime(0.3), cc.callFunc(this.initTitle.bind(this))))
                                },
                                this)))
                        },
                        this))))
                },
                this)))
        },
        initTitle: function() {
            for (var a = 1; 4 >= a; a++) {
                var b = new cc.Sprite(res["f_title" + a]);
                b.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, 300)));
                b.opacity = 0;
                this.title.push(b);
                this.addChild(b)
            }
            this.titleActive(this.index)
        },
        titleActive: function(a) {
            if (0 == a) this.title[a].runAction(cc.sequence(cc.fadeIn(1.2), cc.delayTime(0.3), cc.callFunc(function() {
                    this.index += 1;
                    this.titleActive(this.index)
                },
                this)));
            else for (var b = a - 1; 0 <= b; b--) this.title[b].runAction(cc.sequence(cc.moveBy(1, 0, 65), cc.callFunc(function() {
                    this.title[a].runAction(cc.sequence(cc.fadeIn(1.2), cc.delayTime(0.3), cc.callFunc(function() {
                            3 > this.index ? (this.index += 1, this.titleActive(this.index)) : _F || this.frameActive()
                        },
                        this)))
                },
                this)))
        },
        frameActive: function() {
            _F = !0;
            setTimeout(function() {
                var a = new cc.LayerColor(cc.color(255, 255, 255));
                a.opacity = 0;
                this.addChild(a, 10);
                a.runAction(cc.sequence(cc.spawn(cc.fadeIn(0.2), cc.callFunc(function() {
                        cc.audioEngine.playEffect(res.shutterSound)
                    },
                    this)), cc.callFunc(function() {
                        this.frame.opacity = 255
                    },
                    this), cc.fadeOut(0.2), cc.delayTime(0.3), cc.callFunc(this.frameAction.bind(this))))
            }.bind(this), 2500)
        },
        frameAction: function() {
            this.frame.runAction(cc.sequence(cc.scaleTo(0.5, 0.6), cc.delayTime(0.3), cc.callFunc(this.showShareBtn, this)))
        },
        showShareBtn: function() {
            var a = new cc.MenuItemImage(res.share_n, res.share_p,
                function() {
                    this.addChild(new ShareLayer(res.shareBg), 99)
                },
                this);
            a.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p(0, 130)));
            a = new cc.Menu(a);
            a.x = 0;
            a.y = 0;
            this.addChild(a, 5)
        }
    });
var MainScene = cc.Scene.extend({
    ctor: function() {
        this._super();
        this.addChild(new cc.LayerColor(cc.color(22, 22, 24)));
        var a = new StartLayer;
        this.addChild(a)
    }
});
cc.game.onStart = function() {
    cc.view.enableRetina(!0);
    cc.view.adjustViewPort(!0);
    cc.view.enableAutoFullScreen(!1);
    cc.view.setDesignResolutionSize(750, 1206, cc.ResolutionPolicy.FIXED_HEIGHT);
    cc.view.resizeWithBrowserSize(!0);
    cc.LoaderScene.preload(g_resources,
        function() {
            cc.director.runScene(new MainScene)
        },
        this)
};
cc.game.run("gameCanvas");/**
 * Created by Administrator on 2015/12/4.
 */
/**
 * Created by Administrator on 2015/12/4.
 */
