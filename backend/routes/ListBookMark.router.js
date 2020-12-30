const express = require('express');
const router = express.Router();
const puppeteer = require("puppeteer");
const fs = require("fs")

let listBookMark = require('../models/ListBookMark.model');
const ListBookMark = require('../models/ListBookMark.model');

// READ BookMark
router.route('/').get((req, res) => {
  listBookMark.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

const run = async (url, name) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setViewport({
      width: 1280,
      height: 800
  })
  await page.goto(url)
  await page.screenshot({
      path: `./img/${name}.png`,
      fullPage: true
  })

  await browser.close();
};

router.route('/create-bookmark').post((req, res, next) => {
  run(req.body.url, req.body.title).then(re => console.log(re))
    .catch(error => console.log(error))

    const imageData = fs.(readFileSync`../img/${req.body.title}.png`);

    const image = new Image({
      data: imageData,
      contentType: 'image/png'
    });

    const newListBookMark = new ListBookMark({
      url: req.body.url,
      title: req.body.title,
      img: image,
    })

    console.log(imageData)

    // listBookMark.create(newListBookMark, (error, data) => {

    //   if (error) {
    //     return next(error)
    //   } else {
    //     console.log(data)
    //     res.json(data)
    //   }
    // })
});
// router.route('/add').post((req, res) => {
//   const folder = req.body.folder;
//   const description = req.body.description;
//   const title =  req.body.title;
//   const img = req.body.img;


//   const newBookMark = new ListBookMark({
//     folder,
//     description,
//     title,
//     date,
//   });

//   newBookMark.save()
//     .then(() => res.json('BookMark added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//     ListBookMark.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/delete-bookmark/:id').delete((req, res, next) => {
  listBookMark.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// router.route('/update/:id').post((req, res) => {
//     ListBookMark.findById(req.params.id)
//     .then((exercise) => {
//       exercise.folder = req.body.folder;
//       exercise.description = req.body.description;
//       exercise.url = Number(req.body.url);
//       exercise.title = Date.parse(req.body.title);

//       exercise.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;
