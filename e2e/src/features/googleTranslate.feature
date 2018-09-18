Feature: translate a word 
    as an user
    i want to enter to Google translator
    to translate words between diffrent languages
    Scenario Outline: Translate from english to spanish
    Given user is in Google home page
    And user clicks on the aplications button
    And user selects Google translate aplication
    When he translate the word <englishWord> from english to spanish
    Then he most to see the word <spanishWord> on the screen
    
    Examples:
    | englishWord | spanishWord |
    | 'table'     | 'mesa...'      |
    | 'gold'      | 'oro...'       |
    | 'one'       | 'uno...'     |
    | 'two'       | 'ocho...'     |

