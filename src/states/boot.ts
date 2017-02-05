import * as Utils from '../utils/utils';

export default class Boot extends Phaser.State {
    public preload(): void {
        // Load any assets you need for your preloader state here.
        this.game.load.image('preload_bar', 'assets/images/preload_bar.png');
        this.game.load.image('preload_frame', 'assets/images/preload_frame.png');
    }

    public create(): void {
        // Do anything here that you need to be setup immediately, before the game actually starts doing anything.

        // Uncomment the following to disable multitouch
        // this.input.maxPointers = 1;

        let screenMetrics: Utils.ScreenMetrics = Utils.ScreenUtils.screenMetrics;

        this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.game.scale.setUserScale(screenMetrics.scaleX, screenMetrics.scaleY);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        if (this.game.device.desktop) {
            // Any desktop specific stuff here
        } else {
            // Any mobile specific stuff here

            // Comment the following and uncomment the line after that to force portrait mode instead of landscape
            this.game.scale.forceOrientation(true, false);
            // this.game.scale.forceOrientation(false, true);
        }

        // Use DEBUG to wrap code that should only be included in a DEBUG build of the game
        console.log('DEBUG: ' + DEBUG +
            // Use GIT_REVISION as an identifier when testing builds
            '\nGIT_REVISION: ' + GIT_REVISION +
            // DEFAULT_GAME_WIDTH is the safe area width of the game
            '\nDEFAULT_GAME_WIDTH: ' + DEFAULT_GAME_WIDTH +
            // DEFAULT_GAME_HEIGHT is the safe area height of the game
            '\nDEFAULT_GAME_HEIGHT: ' + DEFAULT_GAME_HEIGHT +
            // MAX_GAME_WIDTH is the max width of the game
            '\nMAX_GAME_WIDTH: ' + MAX_GAME_WIDTH +
            // MAX_GAME_HEIGHT is the max height of the game
            '\nMAX_GAME_HEIGHT: ' + MAX_GAME_HEIGHT +
            // game.width is the actual width of the game
            '\ngame.width: ' + this.game.width +
            // game.height is the actual height of the game
            '\ngame.height: ' + this.game.height);

        this.game.state.start('preloader');
    }
}
