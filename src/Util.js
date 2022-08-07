import { v4 as uuidv4 } from 'uuid';

export default function musicList () {
    return[
        {
            id: uuidv4(),
            name: 'Iran',
            artist: 'Amirhossein Paknahad',
            cover: 'https://nex1music.ir/upload/2021-10-22/amirhossein-paknahad-iran-2021-10-22-13-56-00.jpg',
            audio: 'https://dl.nex1music.ir/1400/07/30/Amirhossein%20Paknahad%20-%20Iran.mp3',
            active: true,
        },
        {
            id: uuidv4(),
            name: 'Rokh Be Rokh',
            artist: 'Kaveh Afagh',
            cover: 'https://nex1music.ir/upload/2021-10-22/kaveh-afagh-rokh-be-rokh-2021-10-22-13-49-15.jpg',
            audio: 'https://dl.nex1music.ir/1400/09/06/Roozbeh%20Bemani%20-%20Ganj.mp3',
            active: false,
        },
        {
            id: uuidv4(),
            name: 'Kash Mishod',
            artist: 'Ebrahim Hashemi',
            cover: 'https://nex1music.ir/upload/2021-11-15/hamid-asghari-kash-mishod-2021-11-15-17-54-09.jpg',
            audio: 'https://dl.nex1music.ir/1400/09/04/Hamed%20Saniani%20-%20Jadeh%20Shomal.mp3?time=1638035856&filename=/1400/09/04/Hamed%20Saniani%20-%20Jadeh%20Shomal.mp3',
            active: false,
        },
        {
            id: uuidv4(),
            name: 'Karma',
            artist: 'Farzad Farzin ',
            cover: 'https://nex1music.ir/upload/2021-10-21/farzad-farzin-karma-2021-10-21-12-59-15.jpg',
            audio: 'https://dl.nex1music.ir/1400/09/02/Farzad%20Sarvi%20-%20Relet%20Kiye.mp3?time=1638035627&filename=/1400/09/02/Farzad%20Sarvi%20-%20Relet%20Kiye.mp3',
            active: false,
        }
    ]
}
