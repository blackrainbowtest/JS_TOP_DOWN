export function preloadImages(gameLvl = 1) {
    let data = {
        Top_Down_Survivor: {
            feet: {
                idle: ['survivor-idle_0.png'],
                run: [
                    'survivor-run_0.png',
                    'survivor-run_1.png',
                    'survivor-run_2.png',
                    'survivor-run_3.png',
                    'survivor-run_4.png',
                    'survivor-run_5.png',
                    'survivor-run_6.png',
                    'survivor-run_7.png',
                    'survivor-run_8.png',
                    'survivor-run_9.png',
                    'survivor-run_10.png',
                    'survivor-run_11.png',
                    'survivor-run_12.png',
                    'survivor-run_13.png',
                    'survivor-run_14.png',
                    'survivor-run_15.png',
                    'survivor-run_16.png',
                    'survivor-run_17.png',
                    'survivor-run_18.png',
                    'survivor-run_19.png',
                ],
                strafe_left: {

                },
                strafe_right: {

                },
                walk: {

                }
            },
            flashlight: {
                idle: [
                    'survivor-idle_flashlight_0.png',
                    'survivor-idle_flashlight_1.png',
                    'survivor-idle_flashlight_2.png',
                    'survivor-idle_flashlight_3.png',
                    'survivor-idle_flashlight_4.png',
                    'survivor-idle_flashlight_5.png',
                    'survivor-idle_flashlight_6.png',
                    'survivor-idle_flashlight_7.png',
                    'survivor-idle_flashlight_8.png',
                    'survivor-idle_flashlight_9.png',
                    'survivor-idle_flashlight_10.png',
                    'survivor-idle_flashlight_11.png',
                    'survivor-idle_flashlight_12.png',
                    'survivor-idle_flashlight_13.png',
                    'survivor-idle_flashlight_14.png',
                    'survivor-idle_flashlight_15.png',
                    'survivor-idle_flashlight_16.png',
                    'survivor-idle_flashlight_17.png',
                    'survivor-idle_flashlight_18.png',
                    'survivor-idle_flashlight_19.png',
                ],
                meleeattack: [
                    'survivor-meleeattack_flashlight_0.png',
                    'survivor-meleeattack_flashlight_1.png',
                    'survivor-meleeattack_flashlight_2.png',
                    'survivor-meleeattack_flashlight_3.png',
                    'survivor-meleeattack_flashlight_4.png',
                    'survivor-meleeattack_flashlight_5.png',
                    'survivor-meleeattack_flashlight_6.png',
                    'survivor-meleeattack_flashlight_7.png',
                    'survivor-meleeattack_flashlight_8.png',
                    'survivor-meleeattack_flashlight_9.png',
                    'survivor-meleeattack_flashlight_10.png',
                    'survivor-meleeattack_flashlight_11.png',
                    'survivor-meleeattack_flashlight_12.png',
                    'survivor-meleeattack_flashlight_13.png',
                    'survivor-meleeattack_flashlight_14.png',
                ],
                move: [
                    'survivor-move_flashlight_0.png',
                    'survivor-move_flashlight_1.png',
                    'survivor-move_flashlight_2.png',
                    'survivor-move_flashlight_3.png',
                    'survivor-move_flashlight_4.png',
                    'survivor-move_flashlight_5.png',
                    'survivor-move_flashlight_6.png',
                    'survivor-move_flashlight_7.png',
                    'survivor-move_flashlight_8.png',
                    'survivor-move_flashlight_9.png',
                    'survivor-move_flashlight_10.png',
                    'survivor-move_flashlight_11.png',
                    'survivor-move_flashlight_12.png',
                    'survivor-move_flashlight_13.png',
                    'survivor-move_flashlight_14.png',
                    'survivor-move_flashlight_15.png',
                    'survivor-move_flashlight_16.png',
                    'survivor-move_flashlight_17.png',
                    'survivor-move_flashlight_18.png',
                    'survivor-move_flashlight_19.png',
                ],
            },
            handgun: {
                idle: [
                    'survivor-idle_handgun_0.png',
                    'survivor-idle_handgun_1.png',
                    'survivor-idle_handgun_2.png',
                    'survivor-idle_handgun_3.png',
                    'survivor-idle_handgun_4.png',
                    'survivor-idle_handgun_5.png',
                    'survivor-idle_handgun_6.png',
                    'survivor-idle_handgun_7.png',
                    'survivor-idle_handgun_8.png',
                    'survivor-idle_handgun_9.png',
                    'survivor-idle_handgun_10.png',
                    'survivor-idle_handgun_11.png',
                    'survivor-idle_handgun_12.png',
                    'survivor-idle_handgun_13.png',
                    'survivor-idle_handgun_14.png',
                    'survivor-idle_handgun_15.png',
                    'survivor-idle_handgun_16.png',
                    'survivor-idle_handgun_17.png',
                    'survivor-idle_handgun_18.png',
                    'survivor-idle_handgun_19.png',
                ],
                meleeattack: [
                    'survivor-meleeattack_handgun_0.png',
                    'survivor-meleeattack_handgun_1.png',
                    'survivor-meleeattack_handgun_2.png',
                    'survivor-meleeattack_handgun_3.png',
                    'survivor-meleeattack_handgun_4.png',
                    'survivor-meleeattack_handgun_5.png',
                    'survivor-meleeattack_handgun_6.png',
                    'survivor-meleeattack_handgun_7.png',
                    'survivor-meleeattack_handgun_8.png',
                    'survivor-meleeattack_handgun_9.png',
                    'survivor-meleeattack_handgun_10.png',
                    'survivor-meleeattack_handgun_11.png',
                    'survivor-meleeattack_handgun_12.png',
                    'survivor-meleeattack_handgun_13.png',
                    'survivor-meleeattack_handgun_14.png',
                ],
                move: [
                    'survivor-move_handgun_0.png',
                    'survivor-move_handgun_1.png',
                    'survivor-move_handgun_2.png',
                    'survivor-move_handgun_3.png',
                    'survivor-move_handgun_4.png',
                    'survivor-move_handgun_5.png',
                    'survivor-move_handgun_6.png',
                    'survivor-move_handgun_7.png',
                    'survivor-move_handgun_8.png',
                    'survivor-move_handgun_9.png',
                    'survivor-move_handgun_10.png',
                    'survivor-move_handgun_11.png',
                    'survivor-move_handgun_12.png',
                    'survivor-move_handgun_13.png',
                    'survivor-move_handgun_14.png',
                    'survivor-move_handgun_15.png',
                    'survivor-move_handgun_16.png',
                    'survivor-move_handgun_17.png',
                    'survivor-move_handgun_18.png',
                    'survivor-move_handgun_19.png',
                ],
                reload: [
                    'survivor-reload_handgun_0.png',
                    'survivor-reload_handgun_1.png',
                    'survivor-reload_handgun_2.png',
                    'survivor-reload_handgun_3.png',
                    'survivor-reload_handgun_4.png',
                    'survivor-reload_handgun_5.png',
                    'survivor-reload_handgun_6.png',
                    'survivor-reload_handgun_7.png',
                    'survivor-reload_handgun_8.png',
                    'survivor-reload_handgun_9.png',
                    'survivor-reload_handgun_10.png',
                    'survivor-reload_handgun_11.png',
                    'survivor-reload_handgun_12.png',
                    'survivor-reload_handgun_13.png',
                    'survivor-reload_handgun_14.png',
                ],
                shoot: [
                    'survivor-shoot_handgun_0.png',
                    'survivor-shoot_handgun_1.png',
                    'survivor-shoot_handgun_2.png',
                ],
            },
            knife: {
                idle: [
                    'survivor-idle_knife_0.png',
                    'survivor-idle_knife_1.png',
                    'survivor-idle_knife_2.png',
                    'survivor-idle_knife_3.png',
                    'survivor-idle_knife_4.png',
                    'survivor-idle_knife_5.png',
                    'survivor-idle_knife_6.png',
                    'survivor-idle_knife_7.png',
                    'survivor-idle_knife_8.png',
                    'survivor-idle_knife_9.png',
                    'survivor-idle_knife_10.png',
                    'survivor-idle_knife_11.png',
                    'survivor-idle_knife_12.png',
                    'survivor-idle_knife_13.png',
                    'survivor-idle_knife_14.png',
                    'survivor-idle_knife_15.png',
                    'survivor-idle_knife_16.png',
                    'survivor-idle_knife_17.png',
                    'survivor-idle_knife_18.png',
                    'survivor-idle_knife_19.png',
                ],
                meleeattack: [
                    'survivor-meleeattack_knife_0.png',
                    'survivor-meleeattack_knife_1.png',
                    'survivor-meleeattack_knife_2.png',
                    'survivor-meleeattack_knife_3.png',
                    'survivor-meleeattack_knife_4.png',
                    'survivor-meleeattack_knife_5.png',
                    'survivor-meleeattack_knife_6.png',
                    'survivor-meleeattack_knife_7.png',
                    'survivor-meleeattack_knife_8.png',
                    'survivor-meleeattack_knife_9.png',
                    'survivor-meleeattack_knife_10.png',
                    'survivor-meleeattack_knife_11.png',
                    'survivor-meleeattack_knife_12.png',
                    'survivor-meleeattack_knife_13.png',
                    'survivor-meleeattack_knife_14.png',
                ],
                move: [
                    'survivor-move_knife_0.png',
                    'survivor-move_knife_1.png',
                    'survivor-move_knife_2.png',
                    'survivor-move_knife_3.png',
                    'survivor-move_knife_4.png',
                    'survivor-move_knife_5.png',
                    'survivor-move_knife_6.png',
                    'survivor-move_knife_7.png',
                    'survivor-move_knife_8.png',
                    'survivor-move_knife_9.png',
                    'survivor-move_knife_10.png',
                    'survivor-move_knife_11.png',
                    'survivor-move_knife_12.png',
                    'survivor-move_knife_13.png',
                    'survivor-move_knife_14.png',
                    'survivor-move_knife_15.png',
                    'survivor-move_knife_16.png',
                    'survivor-move_knife_17.png',
                    'survivor-move_knife_18.png',
                    'survivor-move_knife_19.png',
                ],
            },
            rifle: {
                idle: [
                    'survivor-idle_rifle_0.png',
                    'survivor-idle_rifle_1.png',
                    'survivor-idle_rifle_2.png',
                    'survivor-idle_rifle_3.png',
                    'survivor-idle_rifle_4.png',
                    'survivor-idle_rifle_5.png',
                    'survivor-idle_rifle_6.png',
                    'survivor-idle_rifle_7.png',
                    'survivor-idle_rifle_8.png',
                    'survivor-idle_rifle_9.png',
                    'survivor-idle_rifle_10.png',
                    'survivor-idle_rifle_11.png',
                    'survivor-idle_rifle_12.png',
                    'survivor-idle_rifle_13.png',
                    'survivor-idle_rifle_14.png',
                    'survivor-idle_rifle_15.png',
                    'survivor-idle_rifle_16.png',
                    'survivor-idle_rifle_17.png',
                    'survivor-idle_rifle_18.png',
                    'survivor-idle_rifle_19.png',
                ],
                meleeattack: [
                    'survivor-meleeattack_rifle_0.png',
                    'survivor-meleeattack_rifle_1.png',
                    'survivor-meleeattack_rifle_2.png',
                    'survivor-meleeattack_rifle_3.png',
                    'survivor-meleeattack_rifle_4.png',
                    'survivor-meleeattack_rifle_5.png',
                    'survivor-meleeattack_rifle_6.png',
                    'survivor-meleeattack_rifle_7.png',
                    'survivor-meleeattack_rifle_8.png',
                    'survivor-meleeattack_rifle_9.png',
                    'survivor-meleeattack_rifle_10.png',
                    'survivor-meleeattack_rifle_11.png',
                    'survivor-meleeattack_rifle_12.png',
                    'survivor-meleeattack_rifle_13.png',
                    'survivor-meleeattack_rifle_14.png',
                ],
                move: [
                    'survivor-move_rifle_0.png',
                    'survivor-move_rifle_1.png',
                    'survivor-move_rifle_2.png',
                    'survivor-move_rifle_3.png',
                    'survivor-move_rifle_4.png',
                    'survivor-move_rifle_5.png',
                    'survivor-move_rifle_6.png',
                    'survivor-move_rifle_7.png',
                    'survivor-move_rifle_8.png',
                    'survivor-move_rifle_9.png',
                    'survivor-move_rifle_10.png',
                    'survivor-move_rifle_11.png',
                    'survivor-move_rifle_12.png',
                    'survivor-move_rifle_13.png',
                    'survivor-move_rifle_14.png',
                    'survivor-move_rifle_15.png',
                    'survivor-move_rifle_16.png',
                    'survivor-move_rifle_17.png',
                    'survivor-move_rifle_18.png',
                    'survivor-move_rifle_19.png',
                ],
                reload: [
                    'survivor-reload_rifle_0.png',
                    'survivor-reload_rifle_1.png',
                    'survivor-reload_rifle_2.png',
                    'survivor-reload_rifle_3.png',
                    'survivor-reload_rifle_4.png',
                    'survivor-reload_rifle_5.png',
                    'survivor-reload_rifle_6.png',
                    'survivor-reload_rifle_7.png',
                    'survivor-reload_rifle_8.png',
                    'survivor-reload_rifle_9.png',
                    'survivor-reload_rifle_10.png',
                    'survivor-reload_rifle_11.png',
                    'survivor-reload_rifle_12.png',
                    'survivor-reload_rifle_13.png',
                    'survivor-reload_rifle_14.png',
                ],
                shoot: [
                    'survivor-shoot_rifle_0.png',
                    'survivor-shoot_rifle_1.png',
                    'survivor-shoot_rifle_2.png',
                ],
            },
            shotgun: {
                idle: [
                    'survivor-idle_shotgun_0.png',
                    'survivor-idle_shotgun_1.png',
                    'survivor-idle_shotgun_2.png',
                    'survivor-idle_shotgun_3.png',
                    'survivor-idle_shotgun_4.png',
                    'survivor-idle_shotgun_5.png',
                    'survivor-idle_shotgun_6.png',
                    'survivor-idle_shotgun_7.png',
                    'survivor-idle_shotgun_8.png',
                    'survivor-idle_shotgun_9.png',
                    'survivor-idle_shotgun_10.png',
                    'survivor-idle_shotgun_11.png',
                    'survivor-idle_shotgun_12.png',
                    'survivor-idle_shotgun_13.png',
                    'survivor-idle_shotgun_14.png',
                    'survivor-idle_shotgun_15.png',
                    'survivor-idle_shotgun_16.png',
                    'survivor-idle_shotgun_17.png',
                    'survivor-idle_shotgun_18.png',
                    'survivor-idle_shotgun_19.png',
                ],
                meleeattack: [
                    'survivor-meleeattack_shotgun_0.png',
                    'survivor-meleeattack_shotgun_1.png',
                    'survivor-meleeattack_shotgun_2.png',
                    'survivor-meleeattack_shotgun_3.png',
                    'survivor-meleeattack_shotgun_4.png',
                    'survivor-meleeattack_shotgun_5.png',
                    'survivor-meleeattack_shotgun_6.png',
                    'survivor-meleeattack_shotgun_7.png',
                    'survivor-meleeattack_shotgun_8.png',
                    'survivor-meleeattack_shotgun_9.png',
                    'survivor-meleeattack_shotgun_10.png',
                    'survivor-meleeattack_shotgun_11.png',
                    'survivor-meleeattack_shotgun_12.png',
                    'survivor-meleeattack_shotgun_13.png',
                    'survivor-meleeattack_shotgun_14.png',
                ],
                move: [
                    'survivor-move_shotgun_0.png',
                    'survivor-move_shotgun_1.png',
                    'survivor-move_shotgun_2.png',
                    'survivor-move_shotgun_3.png',
                    'survivor-move_shotgun_4.png',
                    'survivor-move_shotgun_5.png',
                    'survivor-move_shotgun_6.png',
                    'survivor-move_shotgun_7.png',
                    'survivor-move_shotgun_8.png',
                    'survivor-move_shotgun_9.png',
                    'survivor-move_shotgun_10.png',
                    'survivor-move_shotgun_11.png',
                    'survivor-move_shotgun_12.png',
                    'survivor-move_shotgun_13.png',
                    'survivor-move_shotgun_14.png',
                    'survivor-move_shotgun_15.png',
                    'survivor-move_shotgun_16.png',
                    'survivor-move_shotgun_17.png',
                    'survivor-move_shotgun_18.png',
                    'survivor-move_shotgun_19.png',
                ],
                reload: [
                    'survivor-reload_shotgun_0.png',
                    'survivor-reload_shotgun_1.png',
                    'survivor-reload_shotgun_2.png',
                    'survivor-reload_shotgun_3.png',
                    'survivor-reload_shotgun_4.png',
                    'survivor-reload_shotgun_5.png',
                    'survivor-reload_shotgun_6.png',
                    'survivor-reload_shotgun_7.png',
                    'survivor-reload_shotgun_8.png',
                    'survivor-reload_shotgun_9.png',
                    'survivor-reload_shotgun_10.png',
                    'survivor-reload_shotgun_11.png',
                    'survivor-reload_shotgun_12.png',
                    'survivor-reload_shotgun_13.png',
                    'survivor-reload_shotgun_14.png',
                ],
                shoot: [
                    'survivor-shoot_shotgun_0.png',
                    'survivor-shoot_shotgun_1.png',
                    'survivor-shoot_shotgun_2.png',
                ],
            },
        },
        Top_Down_Zombie: {

        },
        Top_Down_Hostage: {

        }
    }

    for (const object in data) {
        for (const type in data[object]) {
            for (const action in data[object][type]) {
                if (data[object][type][action].length) {
                    data[object][type][action] = data[object][type][action].map((name) => {
                        const imagePath = `img/${object}/${type}/${action}/${name}`
                        const image = new Image()
                        image.src = imagePath

                        return name = image
                    })
                }
            }
        }
    }

    return data
}