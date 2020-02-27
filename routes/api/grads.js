const express = require('express');
const router = express.Router(); 
const Grad = require('../../models/Grad');

router.get('/test', (req, res) => { 
    res.json({msg: "Works"})
}); 

router.get('/', async(req, res) => {
    try { 
        const grads = await Grad.find(); 
        res.json(grads); 
        } catch(err) { 
            res.status(500).json({msg: err.message}); 
        }
}); 

router.post('/', async(req, res) => { 
    const grad = new Grad({ 
        name: req.body.name, 
        role: req.body.role, 
        company: req.body.company, 
        yearOfGraduation: req.body.yearOfGraduation
    });
    try { 
        console.log(grad); 
        const newGrad = await grad.save(); 
        res.status(201).json(newGrad);
    } catch (err) { 
        res.status(400).json({ message: err.message });
    }
});

router.post('/update/:id', async (req, res) => { 
    Grad.findById(req.params.id)
        .then(grad => { 
            grad.name = req.body.name; 
            grad.role = req.body.role; 
            grad.company = req.body.company; 
            grad.yearOfGraduation = req.body.yearOfGraduation; 

            grad.save()
                .then(() => res.json('grad updated!'))
                .catch(err => res.status(400).json('Error: ' + err)); 
            })
            .catch(err => res.status(400).json('Error: ' + err)); 
    });

router.delete('/:id', async(req, res) => {
    console.log(req.params.id); 
    Grad.findById(req.params.id)
        .then(grad => grad.remove().then(res.json({ success: 'true" '})))
        .then(err => res.status(404).json('Not Found.' )); 
    console.log('deleted'); 
})

module.exports = router; 