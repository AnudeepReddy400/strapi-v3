module.exports = ({ env }) => ({

    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
        },
      },
    },
    // email: {
    //   provider: 'nodemailer',
    //   providerOptions: {
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: 'ssl',
    //     auth: {
    //       user: 'anudeep.enuke@gmail.com',
    //       pass: 'satsudakhanu',
    //     },
    //     // ... any custom nodemailer options
    //   },
    //   settings: {
    //     defaultFrom: 'anudeep.enuke@gmail.com',
    //   },
    // },
  });

//local
// module.exports = ({ env }) => ({

//   upload: {
//     provider: 'aws-s3',
//     providerOptions: {
//       accessKeyId: "AKIAVJAYJZHTVMPVQG7I",
//       secretAccessKey: "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",
//       region: "us-east-1",
//       params: {
//         Bucket: "zemer-storage"
//       }
//    }
//   },
// });