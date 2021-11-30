require('./db');
const models = require('./models/index');
const hotelRepository = require('./repositories/hotelRepository');
const roomRepository = require('./repositories/roomRepository');
const hotelService = require('./services/hotelService');
const roomService = require('./services/roomService');

async function test0() { //OK
    try {
        await hotelRepository.create({ name: 'A', photo: 'A:/', description: 'aaa' });
        await hotelRepository.create({ name: 'B', photo: 'B:/', description: 'bbb' });
        await hotelRepository.create({ name: 'C', photo: 'C:/', description: 'ccc' });
        await hotelRepository.create({ name: 'D', photo: 'D:/', description: 'ddd' });

        await roomService.addRoom({ hotelId: '1', photo: 'A:/', type: '1', cost: '1', free: 'false' });
        await roomService.addRoom({ hotelId: '1', photo: 'B:/', type: '2', cost: '2', free: 'true' });
        await roomService.addRoom({ hotelId: '2', photo: 'C:/', type: '1', cost: '3', free: 'false' });
        await roomService.addRoom({ hotelId: '2', photo: 'B:/', type: '3', cost: '4', free: 'false' });
        await roomService.addRoom({ hotelId: '2', photo: 'A:/', type: '3', cost: '5', free: 'true' });
        await roomService.addRoom({ hotelId: '3', photo: 'D:/', type: '2', cost: '6', free: 'true' });
        await roomService.addRoom({ hotelId: '4', photo: 'D:/', type: '1', cost: '7', free: 'true' });
        await roomService.addRoom({ hotelId: '1', photo: 'C:/', type: '3', cost: '2', free: 'true' });
    } catch (err) {
        console.log(err);
    }
}

async function test1() { //OK
    try {
        const user = await models.User.create({ email: '123@mail.ru', password: '12345678' });
        console.log('\n\n\ntest1 = ' + user.email + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test2() { //OK
    try {
        const hotel = await hotelRepository.create({ name: 'C', photo: 'D:/', description: 'good' });
        console.log('\n\n\ntest2 = ' + hotel.name + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test3() { //OK
    try {
        const hotel = await hotelRepository.findAll();
        console.log('\n\n\ntest3 = ' + hotel[1].name + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test4() { //OK
    try {
        const hotel = await hotelRepository.findHotelById(1);
        console.log('\n\n\ntest4 = ' + hotel.name + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test5() { //OK
    try {
        const hotel = await hotelRepository.delete(1);
        console.log('\n\n\ntest5 = ' + hotel + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test6() { //OK
    try {
        const room = await roomService.addRoom({ hotelId: '2', photo: 'C:/', type: '1', cost: '3', free: 'true' });
        console.log('\n\n\ntest6 = ' + room.free + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test7() { //OK
    try {
        const hotel = await roomService.getHotelByRoomlId(4);
        console.log('\n\n\ntest7 = ' + hotel.photo + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test8() { //OK
    try {
        await roomService.deleteRoom(5);
    } catch (err) {
        console.log(err);
    }
}

//hotel
async function test9() { //OK
    try {
        const rooms = await hotelService.getFreeRoomsByHotelId(1);
        console.log('\n\n\ntest9 = ');
        for (let i = 0; i < rooms.length; i++) {
            console.log(rooms[i].id);
        }
        console.log('\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test10() { //OK
    try {
        const room = await roomService.getRoomById(7);
        console.log('\n\n\ntest10 = ' + JSON.stringify(room) + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

async function test11() {
    try {
        const hotel = await hotelService.getHotelById(7);
        console.log('\n\n\ntest11 = ' + JSON.stringify(hotel) + '\n\n\n');
    } catch (err) {
        console.log(err);
    }
}

test11();