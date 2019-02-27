"use strict";

let zionMammals = [

    /*  Mammals  */
    {name: "Spotted Bat", type: "small-mammal"},
    {name: "Yuma Myotis", type: "small-mammal"},
    {name: "American Pika", type: "small-mammal"},
    {name: "Black-tailed Jackrabbit", type: "small-mammal"},
    {name: "Uinta Chipmunk", type: "small-mammal"},
    {name: "Yellow-bellied Marmot", type: "small-mammal"},
    {name: "Golden-mantled Ground Squirrel", type: "small-mammal"},
    {name: "Red Squirrel", type: "small-mammal"},
    {name: "Northern Flying Squirrel", type: "small-mammal"},
    {name: "Long-tailed Pocket Mouse", type: "small-mammal"},
    {name: "American Beaver", type: "small-mammal"},
    {name: "Pinyon Mouse", type: "small-mammal"},
    {name: "Merriam's Shrew", type: "small-mammal"},

    /*  Big Mammals  */
    {name: "Coyote", type: "big-mammal"},
    {name: "Kit Fox", type: "big-mammal"},
    {name: "American Black Bear", type: "big-mammal"},
    {name: "Ermine", type: "big-mammal"},
    {name: "Ringtail", type: "big-mammal"},
    {name: "Northern Racoon", type: "big-mammal"},
    {name: "Long-tailed Weasel", type: "big-mammal"},
    {name: "American Badger", type: "big-mammal"},
    {name: "Western Spotted Skunk", type: "big-mammal"},
    {name: "Striped Skunk", type: "big-mammal"},
    {name: "Mountain Lion", type: "big-mammal"},
    {name: "Bobcat", type: "big-mammal"},
    {name: "Elk", type: "big-mammal"},
    {name: "Mule Deer", type: "big-mammal"},
    {name: "Bighorn Sheep", type: "big-mammal"}
];

let zionReptAmph = [

    /*  Reptiles  */
    {name: "Great Basin Collared Lizard", type: "reptile"},
    {name: "Desert Horned Lizard", type: "reptile"},
    {name: "Greater Short-horned Lizard", type: "reptile"},
    {name: "Western Skink", type: "reptile"},
    {name: "Gila Monster", type: "reptile"},
    {name: "Desert Tortoise", type: "reptile"},
    {name: "Western Patch-nosed Snake", type: "reptile"},
    {name: "Sonoran Mountain Kingsnake", type: "reptile"},
    {name: "Terrestrial Gartersnake", type: "reptile"},
    {name: "Western Rattlesnake", type: "reptile"},
    {name: "Flannelmouth Sucker", type: "reptile"},

    /*  Amphibians  */
    {name: "Tiger Salamander", type: "amphibian"},
    {name: "Northern Leopard Frog", type: "amphibian"}
];

let zionBirds = [
    {name: "",}
    /*
    eared grebe*            !
    pied-billed grebe/ +

    great blue heron/       !

    turkey vulture*         !
    Califonia condor/       !

    wood duck+
    green-winged teal
    northern pintail
    northern shoveler
    ring-necked duck*
    lesser scaup
    common goldeneye
    bufflehead
    red-breasted merganser

    northern harrier
    sharp-skinned hawk
    Cooper's hawk*
    red-tailed hawk*
    rough-legged hawk
    golden eagle
    American kestrel*
    peregrine falcon/

    dusky grouse
    wild turkey*

    morning dove*

    greater roadrunner/     !

    western screech-owl     !
    great horned owl        !

    common nighthawk

    white-throated swift* /

    black-chinned hummingbird*      !
    broad-tailed hummingbird/       !

    belted kingfisher/

    red-naped woodpecker
    downy woodpecker
    hairy woodpecker
    northern flicker/

    Cassin's kingbird           !
    western kingbird/

    warbling vireo/

    Steller's jay           !
    western scrub-jay       !
    common raven* /         !

    tree swallow            !
    violet-green swallow    !
    cliff swallow/          !

    canyon wren             !

    ruby-crowned kinglet/

    mountain bluebird       !

    American robin/

    European starling/
    cedar waxwing/          !

    yellow warbler
    yellow-rumped warbler

    summer tanager          !
    western tanager/        !

    dark-eyed junco/

    blue grosbeak           !
    lazuli bunting/         !

    red-winged blackbird
    Brewer's blackbird/

    Cassin's finch          !
     */
];


$(document).ready(function() {

    $('h1').click(function() {
        $(this).css('background-color', 'red');
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

});

