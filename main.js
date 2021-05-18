var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

superhero_image_width = 30;
superhero_image_height = 30;

var player_object = "";
var superhero_image_object = "";

function player_update()
{

    fabric.Image.fromURL("player.png", function (Img) {
                player_object = Img;

                player_object.scaleToWidth(150);
                player_object.scaleToHeight(140);
                player_object.set({
                top:player_y,
                left:player_x,
                });
                canvas.add(player_object);
    });           

}
function new_image(get_image) {

    fabric.Image.fromURL(get_image, function(Img) {
    superhero_image_object = Img;
    
    superhero_image_object.scaleToWidth(block_image_width);
    superhero_image_object.scaleToHeight(block_image_height);
    superhero_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(superhero_image_object);
    
});


}      