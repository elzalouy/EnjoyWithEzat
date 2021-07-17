import { validate } from '../../../httpServices/admin';

describe('test validate function', () => {
    let data = { name: '', email: '', password: '', role: '' };
    beforeEach(() => {
        data = { name: 'ezat elzalouy', email: 'ezatelzalouy711@gmail.com', password: 'AS58bfdf4ff', role: 'all' };
    })
    test('should retrun value', () => {
        expect(validate(data)).toEqual(data);
    })
    test('email not valid', () => {
        data.email = 'ezat';
        expect(validate(data)).toEqual(expect.objectContaining({ message: `"email" must be a valid email` }));
    })
    test('name not valid : length < 3', () => {
        data.name = '';
        expect(validate(data)).toEqual(expect.objectContaining({ message: `"name" is not allowed to be empty` }))
    })
    test('name not valid : type number', () => {
        data.name = 4;
        expect(validate(data)).toEqual(expect.objectContaining({ message: `"name" must be a string` }))
    })
    test('role not existed', () => {
        data.role = '',
            expect(validate(data)).toEqual(expect.objectContaining({ message: `"role" must be one of [all, update, remove, delete]` }));
    })
    test('password not valid: length<3',()=>{
        data.password='s';
        expect(validate(data)).toEqual(expect.objectContaining({message:`"password" length must be at least 3 characters long`}))
    })
    test('password not valid : contains special chars',()=>{
        data.password='%*';
        expect(validate(data)).toEqual(expect.objectContaining({message:`"password" length must be at least 3 characters long`}))
    });
})
