import Joi from 'joi';

const schema=Joi.object({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}),
    password:Joi.string().min(3).max(30).message('password should be between 3 to 30'),
    role:Joi.valid('all','update','remove','delete')
})
export const validate= (data) => {
    const {error,value}=schema.validate(data);
    if(error) return error;
    else return value;
}
