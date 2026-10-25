# Requirements — Rename event title (L-02)

**Student:** Chana Yodaiken  **Date:** 25/10/2026  **Fork URL:**https://github.com/ChanaYodaiken/event-photo-capstone/

## 1. Original request (do not reinterpret)
> I entered the wrong event name. I want to be able to change the event name displayed in the client's gallery.

## 2. Current behavior — verified facts
| Claim | Evidence: file/function/line or HTTP result | Verified? |
| --- | --- | --- |
| Event title exists in data model | export type EventRecord = {  title: string;}| yes|
| Current client gallery presents title |in the function: getClientGallery(eventId: string, clientId: string) this is what return to the client: return eventId: event.id,**title: event.title**, photos: event.photoIds,availableServices: event.serviceOptions.filter(option => option.enabled)} |yes |
| No rename endpoint exists in inspected route file | there is no put request in event service| no |

## 3. Actors / users / use cases / permissions
- Verified: 
- Must clarify: Is prior approval required for changing the event name?
## 4. Goal, scope, out of scope
- Goal: Will be a possible to rename the event-name.
- In scope (confirmed): Allowing event name changes.
- Out of scope (confirmed):
- Undecided: 

## 5. Functional requirements
- FR-1: : Enable the photographer to rename an event.

## 6. Non-functional requirements / constraints
- NFR-1: The system should process the rename action in real-time without significant delay.
## 7. Ten analysis lenses from the preparation assignment
| Term | Question relevant to this change | Answer known? / evidence |
| --- | --- | --- |
| functional requirements | Is it possible to change the name when it allready displayed in the gallery for the client? | no answer yet|
| non-functional requirements |Hho long after the change is made should it be displayed to the client?  | no answer yet |
| actors / users | | |
| use cases | | |
| constraints | Is there a collection of events-name that the user has to choose the relevant option from there, or each user could choose how to name the event?| There is no a collections of evet name. evidence: The title field is definde:   title: string;|
| assumptions | only a photographer or an admin could rename an event| no answer yet|
| acceptance criteria | | |
| ambiguity | | |
| missing information | | |
| scope | | |

## 8. Questions, assumptions, ambiguities
| Question or assumption | Why it matters | Evidence/status | Who decides? |
| --- | --- | --- | --- |
Who have a permmision to change the event name? (client? photographer?) | It is matter for knowing how to build the rename-function and the authorization.| waiting to clarification| The system owner |
## 9. Acceptance criteria (provisional if decisions unresolved)
- Given an exist event and user whose has a permission, when the event name is renamed, then the new name is displayed to the client in the gallery
- Given an exist event and user whose has a permission, when the event name is allready an exist name of another event, then the system will show the user an error message, and offer to him to change the new name to another name.

## 10. Error cases and tests
- Unknown event: return an error message to the user with the message The event you searched for does not exist; please try searching again and be more specific regarding the event you are looking for."
- Unauthorized requester: return an error message to the user indicating that there is no enough permission to rename the event name.
- Empty title: return an error message to the user which indicate that the field title must be completed
- Existing client gallery after change: the name will be chaned without needing to refresh.

## 11. AI checkpoints: understanding / questioning / spec review
Record one claim you verified in source and at least two AI suggestions with adopted/rejected/open status.

### AI question and spec review suggestions — reviewed critically
| AI suggestion | Essential / later / irrelevant / unverified | Justification | Evidence |
| --- | --- | --- | --- |

## 12. Remaining decisions (do not silently invent answers)
- Decide whether a validity check for the event name is necessary and if so defining the criteria for what constitutes an "invalid" name.
- Clarifying the approval process for name changes.

## 13. Personal reflection
- One fact discovered through code review: There is no list of event names from which to select an event name, and the 'title' field is a required field.
- One AI suggestion you rejected or postponed, and why: The AI suggested an acceptance criterion for invalid characters, which I didnt get it because I still need to decide if the validation of the new name is essential or not and if so to define what constitutes an invalid name.
