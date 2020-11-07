import React, { Component } from 'react'

import '../assets/css/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                <footer className="py-3 bg-dark fixed-bottom">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright © MIKAN 2020</p>
                    </div>
                    {/* /.container */}
                </footer>
            </div>
        )
    }
}