@namespace
class SpriteKind:
    Duk = SpriteKind.create()
    Misil = SpriteKind.create()
    Pincho = SpriteKind.create()
    Pez = SpriteKind.create()

def on_button_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.any_button.on_event(ControllerButtonEvent.PRESSED, on_button_pressed)

def on_right_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_a_pressed():
    global projectile2
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """)],
        250,
        False)
    projectile2 = sprites.create_projectile_from_sprite(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 8 8 8 8 . . . 
                    . . . . . . . 8 8 1 1 9 9 8 . . 
                    . . . . 8 8 9 9 1 1 1 1 1 9 9 . 
                    . . 9 9 9 9 1 1 1 1 1 1 1 1 9 8 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 9 8 
                    . . 9 9 8 8 9 1 1 1 1 1 1 1 9 . 
                    . . . . . . 8 8 9 1 9 9 9 8 . . 
                    . . . . . . . . . 8 8 8 8 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        mySprite,
        100,
        0)
    projectile2.start_effect(effects.bubbles)
    pause(1000)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Misil)
sprites.on_overlap(SpriteKind.Misil, SpriteKind.projectile, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    statusbar.value += -1
sprites.on_overlap(SpriteKind.Duk, SpriteKind.Pincho, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    sprites.destroy_all_sprites_of_kind(SpriteKind.Pincho)
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Pincho, on_on_overlap3)

def on_on_overlap4(sprite4, otherSprite4):
    statusbar.value += -1
sprites.on_overlap(SpriteKind.Duk, SpriteKind.Misil, on_on_overlap4)

def on_on_overlap5(sprite5, otherSprite5):
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Pez, on_on_overlap5)

projectile: Sprite = None
Parreable: Sprite = None
projectile2: Sprite = None
statusbar: StatusBarSprite = None
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.Duk)
mySprite.set_stay_in_screen(True)
controller.move_sprite(mySprite)
statusbar = statusbars.create(50, 4, StatusBarKind.health)
scene.set_background_image(img("""
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999991111111119999999999999999999999999999999999999999999999999999999999999999991111199999999999999999999999999999999999999999999999999999999999999999
        9999999999999111111111119999999999999999999999999999999999999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999
        9999999111111111111111111999999999999999999999999999999999999999999999999999999999999111111111199999999999999999999999999999999999999999999999999999999999999999
        9999911911111111111111111999999999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999999999999999
        9999111111111111111111111999999999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999999999999999
        9991111111111111111111119999999999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999999999999999
        9911111111111111111111199999999999999999999999999999999999999999999999999999999999111111111111111111111111999999999999999999999999999999999999999999999999999999
        9911111111111111111111999999999999999999999999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999999999999999999999999999999
        9911111111111111111111199999999999999999999999999999999999999999999999999999999911111111111111111111111111999999999999999999999999999999999999999999999999999999
        9911111111111111111111119999999999999999999999999999999999999999999999999999999911111111111111111111111119999999999999999999999999999999999999999999999999999999
        9911111111111111111111111999999999999999999999999999999999999999999999999999999911111111111111111111111199999999999999999999999999911111119999991119999999999999
        9911111111111111111111111999999999999999999999999999999999999999999999999999999911111111111111111111119999999999999999999999999991111111111999911111999999999999
        9911111111111111111111111199999999999999999999999999999999999999999999999999999991111111111111111111119999999999999999999999999911111111111999111111199999999999
        9911111111199111111111111199999999999999999999999999999999999999999999999999999999999911111111111111119999999999999999999999999911111111111191111111119999999999
        9911111111199111111111111199999999999999999999999999999999999999999999999999999999999991111111111111119999999999999999999999999911111111111111111111119999999999
        9911111111199111111111111199999999999999999999999999999999999999999999999999999999999991111111111111199999999999999999999999999911111111111111111111119999999999
        9991111111199111111111111999999999999999999999999999999999999999999999999999999999999991111111111111999999999999999999999999999911111111111111111111119999999999
        9991111111119111111111119999999999999999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999911111111111111111111119999999999
        9999111111111111111111199999999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999999911111111111111111111119999999999
        9999111111191111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111199999999999
        9999911119999111111199999999d99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999
        999999999999999999999999999dd999999d9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111199999999999
        999999999999999999999999999ddd99999d999999999999d999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111119999999999
        99999999999999999999999999ddddd9999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111999999999
        9999999999999999999999999ddddddd999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111199999999
        9999999999999999999999999d9dddd999ddd999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999
        99999999999999999999999999ddddd999dddd99999999dddddd999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111119999999
        9999999999999999999999999ddddddd999dd9999999999dddd9999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111119999999
        99999999999999999999999999dddd9dd99ddd9999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111119999999
        9999999999999999999999999dddddd999ddd999999999dddddd999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111119999999
        999999999999999999999999dd9ddddd99dddd9999999ddddd9dd99999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111119999999
        99999999999999999999999999dddddddddddd999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111199999999
        9999999999999999999999999ddddddddddddddddddd99dddddd999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111199999999
        9999999999999d9999999999ddddddddddddddddddddd99dddddd9999999999999999999999999999999999999999999999999999999999999999999999111111111111111111d111111111999999999
        999999999999ddd99999999999ddddddddddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999911111111119d9111dd111111199999999999
        999999999999dd9999999999dddddddddddddddddddddddddd9999999999999999999999999999999999d99999999999999999999999999999999999999999999999999dd91111111119999999999999
        99999999999ddd999999999dddddddddddddddddddddddddddd999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999dd99ddd999999999999999999
        9999999999ddddd999999ddddddddddddddddddddddddddddddd99999999999999999999999999999999dd99999999999999999999999999999999999999999999d999dddd9ddddd9999999999999999
        99999999999ddd99999dddddddddddddddddddddddddddddddddd999999999999999999999999999999dddd999999999999999999999999999999999999999999ddd99dddd99dd999999999999999999
        999999999999ddd999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddd9999d9999999999999999999999999999999999999ddd999dd99dddddd999999999999999
        9999999999dddd99ddddddddddddddddddddddddddddddddddddddd999999999999999999999dd999999dd99999d999999999999999999999999999999999999dddd9ddddddddd999999999d99999999
        99999999999ddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999ddd9999dddddd999dd9999999999999999999999999999999999999ddd9dddd999dd99999999d99999999
        999999999999ddddddddddddddddddddddddddddddddddddddddddddd99999999999999999dddd99999dddd9999dd999999999999999999999999999999999999ddd99ddddd99d99999999dddd999999
        999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999ddd9999ddddd99ddd9999999999999d99999999999999999999ddddddddddddd9d999999999d99999999
        99999999999ddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999dddddd9dddddddd9dddd99999999999dd999999999999999999999ddddddddddddddddd9999dddd9999999
        9999999999ddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999dddddd9dddddddddd9dd999999999999ddd9999999999999d99999ddddd99ddddddddddddd999ddd9999999
        99999999dddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999dddddd99dddd9999ddd9999999999ddddd999999999999d9999dddddddddddddddddddddd99ddddd99999
        9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddd99dddddd99ddd9999999999ddddddd99999999999dd99999dddddddddddddddddddddddddd999999
        999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddd9999999d9dddd999999999999dd9999dddddddddddddddddddddddddd9999999
        99999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999ddddddddddddddddddddddd99999ddddd99999999999ddd9999dddddddddddddddddddddddddd9999999
        999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd99ddddddd99999999999d9999dddddddddddddddddddddddddddd999999
        99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999dddddddddddddddddddddddddddddd9dddd9d9999999999dddd99dddddddddddddddddddddddddddddd9999
        9dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999ddddddddddddddddddddddddddddddddddddd999999999999dd99ddddddddddddddddddddddddddddddddd99
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999ddddddddddddddddddddddddddddddddddddddd999999999ddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999dddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999ddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999ddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999dddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
"""))

def on_forever():
    if statusbar.value < 1:
        game.game_over(False)
forever(on_forever)

def on_forever2():
    statusbar.x = mySprite.x
    statusbar.y = mySprite.y + -18
forever(on_forever2)

def on_forever3():
    scroller.scroll_background_with_speed(-50, 0)
forever(on_forever3)

def on_forever4():
    global Parreable
    Parreable = sprites.create(img("""
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
        """),
        SpriteKind.Misil)
    Parreable.set_velocity(-90, 0)
    Parreable.y = randint(0, 115)
    Parreable.x = 200
    Parreable.start_effect(effects.fire)
    pause(randint(1000, 2000))
forever(on_forever4)

def on_forever5():
    global projectile
    projectile = sprites.create(img("""
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
        """),
        SpriteKind.Pincho)
    projectile.set_velocity(-90, 0)
    projectile.y = randint(0, 115)
    projectile.x = 200
    pause(randint(1000, 2000))
forever(on_forever5)
