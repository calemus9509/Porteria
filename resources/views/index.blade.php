<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite('resources/js/app.js')
</head>

<body>
    <div id="app">
        <!-- <example></example> -->
        <!-- <ul>
            <li @click="selectedComponent='Example'">Example</li>
            <li @click="selectedComponent='Pokemon'">Pokemon</li>
        </ul>
        <component :is="selectedComponent"></component> -->

        <router-link to="/Example">Example</router-link>
        <br>
        <router-link to="/Pokemon">Pokemon</router-link>

        <router-view></router-view>

    </div>
</body>

</html>