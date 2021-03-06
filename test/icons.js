var should = require('should'),
  _ = require('underscore'),
  path = require('path'),
  fs = require('fs-extended'),
  ticons = require('../');

var tmpDir = path.join(__dirname, '..', 'tmp');

describe('icons', function() {

  describe('alloy', function() {
    this.timeout(10000);

    before(function() {
      fs.createDir(tmpDir, 0755);
    });

    it('generates expected files', function(done) {

      ticons.icons({
        input: path.join(__dirname, 'icon.png'),
        outputDir: tmpDir,
        radius: 18,
        alloy: true
      }, function(err, output) {

        if (err) {
          return done(new Error(err));
        }

        _.sortBy(output, _.identity).should.be.eql(_.sortBy({
          "ios-appicon-60": tmpDir + "/app/assets/iphone/appicon-60.png",
          "ios-appicon@2x": tmpDir + "/app/assets/iphone/appicon@2x.png",
          "ios-appicon": tmpDir + "/app/assets/iphone/appicon.png",
          "ios-appicon-60@2x": tmpDir + "/app/assets/iphone/appicon-60@2x.png",
          "ios-appicon-72": tmpDir + "/app/assets/iphone/appicon-72.png",
          "ios-appicon-Small": tmpDir + "/app/assets/iphone/appicon-Small.png",
          "ios-appicon-Small@2x": tmpDir + "/app/assets/iphone/appicon-Small@2x.png",
          "ios-appicon-72@2x": tmpDir + "/app/assets/iphone/appicon-72@2x.png",
          "ios-appicon-76": tmpDir + "/app/assets/iphone/appicon-76.png",
          "ios-appicon-Small-40": tmpDir + "/app/assets/iphone/appicon-Small-40.png",
          "ios-appicon-76@2x": tmpDir + "/app/assets/iphone/appicon-76@2x.png",
          "ios-iTunesArtwork": tmpDir + "/app/assets/iphone/iTunesArtwork",
          "android-appicon-ldpi": tmpDir + "/platform/android/res/drawable-ldpi/appicon.png",
          "ios-appicon-Small-40@2x": tmpDir + "/app/assets/iphone/appicon-Small-40@2x.png",
          "ios-appicon-Small-50": tmpDir + "/app/assets/iphone/appicon-Small-50.png",
          "ios-appicon-Small-50@2x": tmpDir + "/app/assets/iphone/appicon-Small-50@2x.png",
          "android-appicon-mdpi": tmpDir + "/platform/android/res/drawable-mdpi/appicon.png",
          "android-appicon": tmpDir + "/app/assets/android/appicon.png",
          "android-appicon-hdpi": tmpDir + "/platform/android/res/drawable-hdpi/appicon.png",
          "android-appicon-xhdpi": tmpDir + "/platform/android/res/drawable-xhdpi/appicon.png",
          "ios-iTunesArtwork@2x": tmpDir + "/app/assets/iphone/iTunesArtwork@2x",
          "tizen-appicon": tmpDir + "/app/assets/tizen/appicon.png",
          "android-appicon-xxhdpi": tmpDir + "/platform/android/res/drawable-xxhdpi/appicon.png",
          "blackberry-appicon": tmpDir + "/app/assets/blackberry/appicon.png",
          "mobileweb-appicon": tmpDir + "/app/assets/mobileweb/appicon.png"
        }, _.identity));

        should(_.every(output, function(output, name) {
          return fs.existsSync(output);
        })).be.true;

        done();

      });

    });

    after(function() {
      fs.deleteDirSync(tmpDir);
    });

  });

});