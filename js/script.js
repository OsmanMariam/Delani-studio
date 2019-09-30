$(document).ready(function() {
    $(".img1").click(function() {
      $(".p1").toggle();
    });
    $(".img2").click(function() {
        $(".p2").toggle();
    });
    $(".img3").click(function() {
        $(".p3").toggle();
    });

    $(".A").hover(function() {
        $(".pa").toggle();
    });
    $(".B").hover(function() {
        $(".pb").toggle();
    });
    $(".C").hover(function() {
        $(".pc").toggle();
    });
    $(".D").hover(function() {
        $(".pd").toggle();
    });
    $(".E").hover(function() {
        $(".pe").toggle();
    });
    $(".F").hover(function() {
        $(".pf").toggle();
    });
    $(".G").hover(function() {
        $(".pg").toggle();
    });
    $(".H").hover(function() {
        $(".ph").toggle();
    });
});

    function contact(form){
        alert("Thank you" + name + "for  reaching out to us");
    };
  