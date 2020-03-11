import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import './completedProject.scss';

class CompletedProject {
    constructor() {
        $('.js-completed-project__preview').slick({
            speed: 300,
            centerMode: false,
            variableWidth: true
        });
    }
}
  
$(() => {
    new CompletedProject();
});