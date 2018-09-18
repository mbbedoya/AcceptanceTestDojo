import { element, by, ElementFinder } from 'protractor';

export class GoogleTranslatePage {

    source_lenguage_button = element(by.id('gt-sl-gms'));

    destiny_lenguage_button = element(by.id('gt-tl-gms'));

    spanish_option = element(by.xpath('/HTML[1]/BODY[1]/DIV[17]/TABLE[1]/TBODY[1]/TR[1]/TD[2]/DIV[1]/DIV[13]'));

    english_option = element(by.xpath('//*[@id=\":t\"]/div'));

    translate_area = element(by.id('source'));

    translate_button = element(by.id('gt-submit'));

    translated_area = element(by.id('gt-res-dir-ctr'));


    setValue(elemento: ElementFinder, value) {
        elemento.sendKeys(value);
    }



}

