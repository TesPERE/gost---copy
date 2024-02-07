namespace SpriteKind {
    export const Duk = SpriteKind.create()
    export const Misil = SpriteKind.create()
    export const Pincho = SpriteKind.create()
    export const Pez = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 9 9 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . b b b b b 9 9 9 9 9 9 9 b . . 
        . b 6 9 b 9 9 9 9 9 9 9 9 b . . 
        . . b 9 9 b 9 6 1 f 9 6 4 f . . 
        . . b 6 9 9 b 6 f f 9 4 4 c . . 
        b b 6 b 9 9 9 d f b 4 4 4 4 b . 
        b 6 6 c 6 9 9 b 9 4 4 4 4 4 4 b 
        c 6 6 6 c c b 9 9 9 9 9 9 9 b . 
        c b 6 6 6 6 6 9 9 9 9 9 9 9 b . 
        . c 6 6 6 6 6 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . b b b b b 9 9 9 9 9 9 9 b . . 
        . b 6 9 b 9 9 9 9 9 9 9 9 b . . 
        . . b 9 9 b 9 d 1 f 9 6 4 f . . 
        . . b 6 9 9 b 1 f f 9 4 4 c . . 
        b b 6 b 9 9 9 6 f b 4 4 4 4 4 b 
        b 6 6 c 6 9 9 b 9 4 4 4 4 4 b . 
        c 6 6 6 c c b 9 9 9 9 9 9 9 b . 
        c b 6 6 6 6 6 9 9 9 9 9 9 9 b . 
        . c 6 6 6 6 6 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 9 6 f . . 
        . . . . b 9 9 1 f f 9 6 4 c . . 
        . . . . b 9 9 d f b 6 6 4 4 . . 
        b 6 6 6 b b 6 9 9 9 4 4 4 4 4 b 
        b b 6 9 9 9 b 9 9 4 4 4 4 4 b . 
        b 6 c 9 9 9 9 6 9 9 9 9 9 b . . 
        c 6 6 c 6 9 9 b 9 9 9 9 9 9 b . 
        c b 6 6 c c b 9 9 9 9 9 9 9 b . 
        . c 6 6 6 6 6 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 6 4 c . . 
        . . . . b 9 9 1 f f 6 6 4 4 4 b 
        . . . . b 9 9 d f b 4 4 4 4 b . 
        . . . b 6 9 9 9 9 4 4 4 4 b . . 
        . . b 6 6 9 9 9 9 9 9 9 9 b . . 
        . b 6 6 6 6 9 9 9 9 9 9 9 9 b . 
        b 6 6 6 b b b 9 9 9 9 9 9 9 b . 
        c 6 6 b 9 9 d c 9 9 9 9 9 9 b . 
        c b b d 9 d c 6 9 9 9 9 9 9 b . 
        . b 9 9 b c 6 6 9 9 9 9 9 6 b . 
        b b c c c 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 6 4 c . . 
        . . . . b 9 9 1 f f 6 6 4 4 4 b 
        . . . . b 9 9 d f b 4 4 4 4 b . 
        . . . b 6 9 9 9 9 4 4 4 4 b . . 
        . b b 6 6 6 9 9 9 9 9 9 9 b . . 
        b 6 6 6 b b b 9 9 9 9 9 9 9 b . 
        c 6 6 b 9 9 d c 9 9 9 9 9 9 b . 
        c b b 9 9 d c 6 9 9 9 9 9 9 b . 
        c b 9 9 b c 6 6 9 9 9 9 9 9 b . 
        b b c c c 6 6 6 9 9 9 9 9 6 b . 
        . . . . c c 6 6 6 9 9 9 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 9 6 f . . 
        . . . . b 9 9 1 f f 9 6 4 c . . 
        . . . . b 9 9 d f b 6 6 4 4 . . 
        . b b b 6 9 9 9 9 9 4 4 4 4 4 b 
        b 6 6 6 b b 6 9 9 4 4 4 4 4 b . 
        b b 6 9 9 9 b 9 9 9 9 9 9 b . . 
        c 6 c 9 9 9 9 6 9 9 9 9 9 9 b . 
        c b 6 c 6 9 9 b 9 9 9 9 9 9 b . 
        . c 6 6 c c b 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 9 9 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . b b b b b 9 9 9 9 9 9 9 b . . 
        . b 6 9 b 9 9 9 9 9 9 9 9 b . . 
        . . b 9 9 b 9 d 1 f 9 6 4 f . . 
        . . b 6 9 9 b 1 f f 9 4 4 c . . 
        b b 6 b 9 9 9 d f 6 4 4 4 4 b . 
        b 6 6 c 6 9 9 b 9 4 4 4 4 4 4 b 
        c 6 6 6 c c b 9 9 9 9 9 9 9 b . 
        c b 6 6 6 6 6 9 9 9 9 9 9 9 b . 
        . c 6 6 6 6 6 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . b b b b b 9 9 9 9 9 9 9 b . . 
        . b 6 9 b 9 9 9 9 9 9 9 9 b . . 
        . . b 9 9 b 9 d 1 f 9 6 4 f . . 
        . . b 6 9 9 b 1 f f 9 4 4 c . . 
        b b 6 b 9 9 9 6 f b 4 4 4 4 4 b 
        b 6 6 c 6 9 9 b 9 4 4 4 4 4 b . 
        c 6 6 6 c c b 9 9 9 9 9 9 9 b . 
        c b 6 6 6 6 6 9 9 9 9 9 9 9 b . 
        . c 6 6 6 6 6 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 9 6 f . . 
        . . . . b 9 9 1 f f 9 6 4 c . . 
        . . . . b 9 9 d f b 6 6 4 4 . . 
        b 6 6 6 b b 6 9 9 9 4 4 4 4 4 b 
        b b 6 9 9 9 b 9 9 4 4 4 4 4 b . 
        b 6 c 9 9 9 9 6 9 9 9 9 9 b . . 
        c 6 6 c 6 9 9 b 9 9 9 9 9 9 b . 
        c b 6 6 c c b 9 9 9 9 9 9 9 b . 
        . c 6 6 6 6 6 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 6 4 c . . 
        . . . . b 9 9 1 f f 6 6 4 4 4 b 
        . . . . b 9 9 d f b 4 4 4 4 b . 
        . . . b 6 9 9 9 9 4 4 4 4 b . . 
        . . b 6 6 9 9 9 9 9 9 9 9 b . . 
        . b 6 6 6 6 9 9 9 9 9 9 9 9 b . 
        b 6 6 6 b b b 9 9 9 9 9 9 9 b . 
        c 6 6 b 9 9 6 c 9 9 9 9 9 9 b . 
        c b b 6 9 6 c 6 9 9 9 9 9 9 b . 
        . b 9 9 b c 6 6 9 9 9 9 9 6 b . 
        b b c c c 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 d 4 c . . 
        . . . . b 9 9 1 f f d d 4 4 4 b 
        . . . . b 9 9 d f b 4 4 4 4 b . 
        . . . b 6 9 9 9 9 4 4 4 4 b . . 
        . b b 6 6 6 9 9 9 9 9 9 9 b . . 
        b 6 6 6 b b b 9 9 9 9 9 9 9 b . 
        c 6 6 b 9 9 6 c 9 9 9 9 9 9 b . 
        c b b 6 9 6 c 6 9 9 9 9 9 9 b . 
        c b 9 9 b c 6 6 9 9 9 9 9 9 b . 
        b b c 6 c 6 6 6 9 9 9 9 9 d b . 
        . . . . c c 6 6 6 9 9 9 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 9 6 f . . 
        . . . . b 9 9 1 f f 9 6 4 c . . 
        . . . . b 9 9 d f b 6 6 4 4 . . 
        . b b b 6 9 9 9 9 9 4 4 4 4 4 b 
        b 6 6 6 b b 6 9 9 4 4 4 4 4 b . 
        b b 6 9 9 9 b 9 9 9 9 9 9 b . . 
        c 6 c 9 9 9 9 6 9 9 9 9 9 9 b . 
        c b 6 c 6 9 9 b 9 9 9 9 9 9 b . 
        . c 6 6 c c b 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b 9 9 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 9 9 9 9 9 b b . . . . . 
        . . b 9 9 9 9 9 9 9 b b b b b . 
        . . b 9 9 9 9 9 9 9 9 b 9 6 b . 
        . . f 4 6 9 f 1 d 9 b 9 9 b . . 
        . . c 4 4 9 f f 1 b 9 9 6 b . . 
        . b 4 4 4 4 b f d 9 9 9 b 6 b b 
        b 4 4 4 4 4 4 9 b 9 9 6 c 6 6 b 
        . b 9 9 9 9 9 9 9 b c c 6 6 6 c 
        . b 9 9 9 9 9 9 9 6 6 6 6 6 b c 
        . b 6 9 9 9 9 9 6 6 6 6 6 6 c . 
        . . b b 9 9 9 6 6 6 6 6 b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 9 b . . . . . . . . . . 
        . . . . b 9 b . . . . . . . . . 
        . . . . . c b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 9 9 9 9 9 b b . . . . . 
        . . f 6 9 9 f 1 d 9 b b . . . . 
        . . c 4 6 9 f f 1 9 9 b . . . . 
        . . 4 4 6 6 b f d 9 9 b . . . . 
        b 4 4 4 4 4 9 9 9 6 b b 6 6 6 b 
        . b 4 4 4 4 4 9 9 b 9 9 9 6 b b 
        . . b 9 9 9 9 9 6 9 9 9 9 c 6 b 
        . b 9 9 9 9 9 9 b 9 9 6 c 6 6 c 
        . b 9 9 9 9 9 9 9 b c c 6 6 b c 
        . b 6 9 9 9 9 9 6 6 6 6 6 6 c . 
        . . b b 9 9 9 6 6 6 6 6 b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 9 b . . . . . . . . . . 
        . . . . b 9 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 9 9 9 9 9 b b . . . . . 
        . . c 4 6 9 f 1 d 9 b b . . . . 
        b 4 4 4 6 6 f f 1 9 9 b . . . . 
        . b 4 4 4 4 b f d 9 9 b . . . . 
        . . b 4 4 4 4 9 9 9 9 6 b . . . 
        . . b 9 9 9 9 9 9 9 9 6 6 b . . 
        . b 9 9 9 9 9 9 9 9 6 6 6 6 b . 
        . b 9 9 9 9 9 9 9 b b b 6 6 6 b 
        . b 9 9 9 9 9 9 c 6 9 9 b 6 6 c 
        . b 9 9 9 9 9 9 6 c 6 9 6 b b c 
        . b 6 9 9 9 9 9 6 6 c b 9 9 b . 
        . . b b 9 9 9 6 6 6 6 c c c b b 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 9 b . . . . . . . . . . 
        . . . . b 9 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 9 9 9 9 9 b b . . . . . 
        . . c 4 6 9 f 1 d 9 b b . . . . 
        b 4 4 4 6 6 f f 1 9 9 b . . . . 
        . b 4 4 4 4 b f d 9 9 b . . . . 
        . . b 4 4 4 4 9 9 9 9 6 b . . . 
        . . b 9 9 9 9 9 9 9 6 6 6 b b . 
        . b 9 9 9 9 9 9 9 b b b 6 6 6 b 
        . b 9 9 9 9 9 9 c 6 9 9 b 6 6 c 
        . b 9 9 9 9 9 9 6 c 6 9 6 b b c 
        . b 9 9 9 9 9 9 6 6 c b 9 9 b c 
        . b 6 9 9 9 9 9 6 6 6 c c c b b 
        . . b b 9 9 9 6 6 6 c c . . . . 
        . . . b b c c c c c . . . . . . 
        `,img`
        . . . b 9 b . . . . . . . . . . 
        . . . . b 9 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 9 9 9 9 9 b b . . . . . 
        . . f 6 9 9 f 1 d 9 b b . . . . 
        . . c 4 6 9 f f 1 9 9 b . . . . 
        . . 4 4 6 6 b f d 9 9 b . . . . 
        b 4 4 4 4 4 9 9 9 9 9 6 b b b . 
        . b 4 4 4 4 4 9 9 6 b b 6 6 6 b 
        . . b 9 9 9 9 9 9 b 9 9 9 6 b b 
        . b 9 9 9 9 9 9 6 9 9 9 9 c 6 c 
        . b 9 9 9 9 9 9 b 9 9 6 c 6 b c 
        . b 6 9 9 9 9 9 6 b c c 6 6 c . 
        . . b b 9 9 9 6 6 6 6 6 b c . . 
        . . . b b c c c c c c c c . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Misil, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Misil)
})
sprites.onOverlap(SpriteKind.Duk, SpriteKind.Pincho, function (sprite, otherSprite) {
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Pincho, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Pincho)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
controller.combos.attachCombo("A B A", function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 9 6 f . . 
        . . . . b 9 9 1 f f 9 6 4 c . . 
        . . . . b 9 9 d f b 6 6 4 4 . . 
        b 6 6 6 b b 6 9 9 9 4 4 4 4 4 b 
        b b 6 9 9 9 b 9 9 4 4 4 4 4 b . 
        b 6 c 9 9 9 9 6 9 9 9 9 9 b . . 
        c 6 6 c 6 9 9 b 9 9 9 9 9 9 b . 
        c b 6 6 c c b 9 9 9 9 9 9 9 b . 
        . c 6 6 6 6 6 6 9 9 9 9 9 d b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 d 1 f 9 9 6 f . . 
        . . . . b 9 9 1 f f 9 6 4 c . . 
        . . . . b 9 9 d f b 6 6 4 4 . . 
        . b b b 6 9 9 9 9 9 4 4 4 4 4 b 
        b 6 6 6 b b 6 9 9 4 4 4 4 4 b . 
        b b 6 9 9 9 b 9 9 9 9 9 9 b . . 
        c 6 c 9 9 9 9 6 9 9 9 9 9 9 b . 
        c b 6 c 6 9 9 b 9 9 9 9 9 9 b . 
        . c 6 6 c c b 6 9 9 9 9 9 6 b . 
        . . c b 6 6 6 6 6 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    250,
    false
    )
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 8 8 8 8 . . . 
        . . . . . . . 8 8 1 1 9 9 8 . . 
        . . . . 8 8 9 9 1 1 1 1 9 9 8 . 
        . . 9 9 9 9 1 1 1 1 1 9 9 9 8 . 
        . . 1 1 1 1 1 1 1 1 9 1 1 9 8 . 
        . . 9 9 8 8 9 1 1 1 1 9 9 9 8 . 
        . . . . . . 8 8 9 1 1 9 1 8 . . 
        . . . . . . . . . 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    projectile2.startEffect(effects.bubbles)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Duk, SpriteKind.Misil, function (sprite, otherSprite) {
    statusbar.value += -1
})
let projectile: Sprite = null
let Parreable: Sprite = null
let projectile2: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . b 9 b . . . 
    . . . . . . . . . b 9 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 9 9 9 9 9 b . . . 
    . . . . b b 9 d 1 f 9 9 d f . . 
    . . . . b 9 9 1 f f 9 6 4 c . . 
    . . . . b 9 9 d f b 6 6 4 4 . . 
    b 6 6 6 b b 6 9 9 9 4 4 4 4 4 b 
    b b 6 9 9 9 b 9 9 4 4 4 4 4 b . 
    b 6 c 9 9 9 9 6 9 9 9 9 9 b . . 
    c 6 6 c 6 9 9 b 9 9 9 9 9 9 b . 
    c b 6 6 c c b 9 9 9 9 9 9 9 b . 
    . c 6 6 6 6 6 6 9 9 9 9 9 6 b . 
    . . c b 6 6 6 6 6 9 9 9 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Duk)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
statusbar = statusbars.create(50, 4, StatusBarKind.Health)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddd
    ddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3dddddddddddddddd
    ddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333ddddddddddddddd
    dddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddd
    ddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333dddddddddddddd
    ddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3dddddddddddddd
    ddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333dddddddddddddddd
    ddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333dddddddddddddd
    ddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333dddddddddddddd
    ddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333dddddddddddd
    dd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddd
    d33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbddddd
    33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd
    333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd
    d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3
    d333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3d
    33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd
    333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3
    3333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd33
    3333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd33
    3333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd33
    3333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd33
    3333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd33
    3333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd3
    3333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd33
    333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333
    33bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b333
    33b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b333
    33b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b333
    3bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b333
    3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b33
    3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b33
    3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb
    bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
    3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
    3b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb33344433333
    3b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb333444333333
    44444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb334443344444
    44443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb333334444444
    44444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb333344444444
    44444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb34444344444
    44444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b4334434
    3444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b3344333
    33b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb333333
    33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
    33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
    33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
    333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
    333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333
    333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333
    3333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb333
    33333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b3333
    33333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b33333
    33333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb333333
    33333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb33333333
    33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
    33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
    33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
    33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
    33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
    33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
    3333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d33333333
    3333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d3
    3333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd3
    dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33
    3dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd33333333
    3dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d3333
    3dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d3
    ddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33ddd
    ddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbddddddddd
    ddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbddddddddd
    ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
    ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
    ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
    ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
    ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
    ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
    ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
    ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
    ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
    443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
    44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `)
info.setScore(0)
forever(function () {
    scroller.scrollBackgroundWithSpeed(-50, 0)
    statusbar.x = mySprite.x
    statusbar.y = mySprite.y + -18
    if (statusbar.value < 1) {
        game.gameOver(false)
    }
})
forever(function () {
    info.changeScoreBy(1)
    pause(1000)
})
forever(function () {
    Parreable = sprites.create(img`
        ........................
        ............fff.........
        ...........fccf.........
        ..........fcccf.........
        .........fccccf.........
        ...ffffffffffff.........
        ..fcccccccccccff2222....
        .fcfffccccccccff44442...
        fccf9fccccccccff554442..
        .fcfffccccccccff44442...
        ..fcccccccccccff2222....
        ...ffffffffffff.........
        .........fccccf.........
        ..........fcccf.........
        ...........fccf.........
        ............fff.........
        `, SpriteKind.Misil)
    Parreable.setVelocity(-90, 0)
    Parreable.y = randint(0, 115)
    Parreable.x = 200
    Parreable.startEffect(effects.fire)
    pause(randint(1000, 2000))
})
forever(function () {
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f f 
        . . . . . . . . . . . f b b b f 
        . . . . . . . . . . f b b b b f 
        . . . . . . . . . f b b 2 b b f 
        . . . . . . . . f b 2 2 b b b f 
        . . . . . . . f 2 2 2 b b 2 b f 
        . . . . . . f 2 2 b b b b b b f 
        . . . . . f 2 2 2 2 b 2 b b b f 
        . . . . . . f 2 2 b 2 b b b b f 
        . . . . . . . f 2 b 2 b b b b f 
        . . . . . . . . f 2 b 2 2 b b f 
        . . . . . . . . . f b b b 2 b f 
        . . . . . . . . . . f b b b 2 f 
        . . . . . . . . . . . f b b b f 
        . . . . . . . . . . . . f f f f 
        `, SpriteKind.Pincho)
    projectile.setVelocity(-90, 0)
    projectile.y = randint(0, 115)
    projectile.x = 200
    pause(randint(1000, 2000))
})
