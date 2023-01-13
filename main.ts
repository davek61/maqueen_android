makerbit.onIrDatagram(function () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showIcon(IconNames.Yes)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    if (convertToText(makerbit.irDatagram()).includes("FF02FD")) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
basic.showIcon(IconNames.Sad)
